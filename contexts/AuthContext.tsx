'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  mobile: string;
  role: string;
  subscriptionStatus?: 'active' | 'inactive' | 'cancelled' | string;
  subscription?: {
    status?: 'active' | 'inactive' | 'cancelled' | string;
    plan?: string;
    endDate?: string;
  };
}

interface LoginRecord {
  date: string;
  timestamp: number;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  login: (token: string, user: User) => void;
  logout: () => void;
  isAuthenticated: boolean;
  getCurrentStreak: () => number;
  getTotalActiveDays: () => number;
  getLoginHistory: () => LoginRecord[];
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const recordLogin = () => {
    const today = new Date().toISOString().split('T')[0];
    const existingLogins = getLoginHistory();
    
    // Check if already logged in today
    const alreadyLoggedInToday = existingLogins.some(login => login.date === today);
    
    if (!alreadyLoggedInToday) {
      const newLogin: LoginRecord = {
        date: today,
        timestamp: Date.now()
      };
      
      const updatedLogins = [...existingLogins, newLogin];
      localStorage.setItem('loginHistory', JSON.stringify(updatedLogins));
    }
  };

  const getLoginHistory = (): LoginRecord[] => {
    if (typeof window === 'undefined') return [];
    
    const storedLogins = localStorage.getItem('loginHistory');
    if (!storedLogins) return [];
    
    try {
      return JSON.parse(storedLogins);
    } catch (error) {
      console.error('Error parsing login history:', error);
      return [];
    }
  };

  const getCurrentStreak = (): number => {
    const logins = getLoginHistory();
    if (logins.length === 0) return 0;
    
    // Sort logins by date
    const sortedLogins = logins.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    let streak = 0;
    const today = new Date().toISOString().split('T')[0];
    let currentDate = new Date(today);
    
    for (const login of sortedLogins) {
      const loginDate = login.date;
      const expectedDate = currentDate.toISOString().split('T')[0];
      
      if (loginDate === expectedDate) {
        streak++;
        currentDate.setDate(currentDate.getDate() - 1);
      } else {
        break;
      }
    }
    
    return streak;
  };

  const getTotalActiveDays = (): number => {
    return getLoginHistory().length;
  };

  useEffect(() => {
    // Check for existing auth state on mount
    const storedToken = localStorage.getItem('authToken');
    const storedUser = localStorage.getItem('authUser');

    if (storedToken && storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setToken(storedToken);
        setUser(parsedUser);
        
        // Record login if user is authenticated
        recordLogin();
      } catch (error) {
        console.error('Error parsing stored user data:', error);
        localStorage.removeItem('authToken');
        localStorage.removeItem('authUser');
      }
    }
    setIsLoading(false);
  }, []);

  const login = (newToken: string, newUser: User) => {
    setToken(newToken);
    setUser(newUser);
    localStorage.setItem('authToken', newToken);
    localStorage.setItem('authUser', JSON.stringify(newUser));
    
    // Record this login
    recordLogin();
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('authToken');
    localStorage.removeItem('authUser');
    // Note: We keep login history for streak calculation even after logout
  };

  const value = {
    user,
    token,
    isLoading,
    login,
    logout,
    isAuthenticated: !!token && !!user,
    getCurrentStreak,
    getTotalActiveDays,
    getLoginHistory,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
