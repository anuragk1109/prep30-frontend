interface LoginResponse {
  message: string;
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
    mobile: string;
    role: string;
  };
}

interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  level: string;
  price: number;
  thumbnail?: string;
  category?: string;
}

interface CoursesResponse {
  message: string;
  courses: Course[];
}

interface LoginData {
  email: string;
  password: string;
}

const API_BASE_URL = (process.env.NEXT_PUBLIC_API_BASE_URL || 'https://prep30-backend.onrender.com').replace(/\/$/, '');

export const loginUser = async (userData: LoginData): Promise<LoginResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `Login failed with status ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Network error during login');
  }
};

interface RegisterResponse {
  message: string;
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
    mobile: string;
    role: string;
  };
}

interface RegisterData {
  name: string;
  email: string;
  password: string;
  mobile: string;
}

export const registerUser = async (userData: RegisterData): Promise<RegisterResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `Registration failed with status ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Network error during registration');
  }
};

export const getCourses = async (): Promise<Course[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/courses`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `Failed to fetch courses with status ${response.status}`);
    }

    const data = await response.json().catch(() => null);

    if (Array.isArray(data)) {
      return data as Course[];
    }

    if (data && typeof data === 'object') {
      const maybeCourses = (data as any).courses;
      if (Array.isArray(maybeCourses)) {
        return maybeCourses as Course[];
      }

      const maybeData = (data as any).data;
      if (Array.isArray(maybeData)) {
        return maybeData as Course[];
      }
    }

    return [];
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Network error while fetching courses');
  }
};
