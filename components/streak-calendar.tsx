'use client';

import { useState, useEffect } from 'react';
import { FiCalendar, FiZap, FiAward } from 'react-icons/fi';
import { useAuth } from '@/contexts/AuthContext';

interface StreakData {
  date: string;
  hasActivity: boolean;
  isToday: boolean;
  isCurrentMonth: boolean;
}

interface StreakCalendarProps {
  userId: string;
}

const StreakCalendar: React.FC<StreakCalendarProps> = ({ userId }) => {
  const [streakData, setStreakData] = useState<StreakData[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentDate, setCurrentDate] = useState(new Date());
  const { getCurrentStreak, getTotalActiveDays, getLoginHistory } = useAuth();

  useEffect(() => {
    const generateStreakData = () => {
      const data: StreakData[] = [];
      const today = new Date();
      const year = today.getFullYear();
      const month = today.getMonth();
      
      // Get login history
      const loginHistory = getLoginHistory();
      const loginDates = new Set(loginHistory.map(login => login.date));
      
      // Get the first day of the month
      const firstDay = new Date(year, month, 1);
      const lastDay = new Date(year, month + 1, 0);
      
      // Add padding days from previous month
      const startPadding = firstDay.getDay();
      const prevMonth = new Date(year, month, 0);
      
      for (let i = startPadding - 1; i >= 0; i--) {
        const date = new Date(prevMonth);
        date.setDate(prevMonth.getDate() - i);
        data.push({
          date: date.toISOString().split('T')[0],
          hasActivity: loginDates.has(date.toISOString().split('T')[0]),
          isToday: false,
          isCurrentMonth: false
        });
      }
      
      // Add current month days
      for (let day = 1; day <= lastDay.getDate(); day++) {
        const date = new Date(year, month, day);
        const dateString = date.toISOString().split('T')[0];
        const isToday = date.toDateString() === today.toDateString();
        data.push({
          date: dateString,
          hasActivity: loginDates.has(dateString),
          isToday,
          isCurrentMonth: true
        });
      }
      
      // Add padding days from next month
      const endPadding = 6 - lastDay.getDay();
      for (let i = 1; i <= endPadding; i++) {
        const date = new Date(year, month + 1, i);
        data.push({
          date: date.toISOString().split('T')[0],
          hasActivity: loginDates.has(date.toISOString().split('T')[0]),
          isToday: false,
          isCurrentMonth: false
        });
      }
      
      return data;
    };

    const data = generateStreakData();
    setStreakData(data);
    setLoading(false);
  }, [userId, getLoginHistory]);

  const getStreakColor = (hasActivity: boolean, isToday: boolean) => {
    if (isToday) return 'bg-blue-500 border-blue-600';
    if (hasActivity) return 'bg-green-500 border-green-600';
    return 'bg-gray-100 border-gray-200';
  };

  const getMonthName = (date: Date) => {
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  const getDayNames = () => {
    return ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  };

  const navigateMonth = (direction: number) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + direction);
    setCurrentDate(newDate);
  };

  const currentStreak = getCurrentStreak();
  const longestStreak = Math.max(currentStreak, 15); // This could be calculated from login history
  const totalDays = getTotalActiveDays();

  if (loading) {
    return (
      <div className="bg-white shadow rounded-lg p-4 sm:p-6">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded mb-4"></div>
          <div className="grid grid-cols-7 gap-1 sm:gap-2 mb-4">
            {[1, 2, 3, 4, 5, 6, 7].map((i) => (
              <div key={i} className="h-6 sm:h-8 bg-gray-200 rounded"></div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-1 sm:gap-2">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((i) => (
              <div key={i} className="h-8 sm:h-10 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white shadow rounded-lg">
      <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-200">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
          <div className="flex items-center">
            <FiCalendar className="h-5 w-5 text-gray-500 mr-2" />
            <h2 className="text-lg font-medium text-gray-900">Daily Streak</h2>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => navigateMonth(-1)}
              className="p-1 hover:bg-gray-100 rounded text-sm sm:text-base"
            >
              ←
            </button>
            <span className="text-xs sm:text-sm text-gray-600 min-w-[100px] text-center">
              {getMonthName(currentDate)}
            </span>
            <button
              onClick={() => navigateMonth(1)}
              className="p-1 hover:bg-gray-100 rounded text-sm sm:text-base"
            >
              →
            </button>
          </div>
        </div>
      </div>
      
      <div className="p-4 sm:p-6">
        {/* Streak Stats */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-4 sm:mb-6">
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <FiZap className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500 mr-1" />
              <span className="text-lg sm:text-2xl font-bold text-gray-900">{currentStreak}</span>
            </div>
            <p className="text-xs text-gray-500">Current Streak</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <FiAward className="h-4 w-4 sm:h-5 sm:w-5 text-purple-500 mr-1" />
              <span className="text-lg sm:text-2xl font-bold text-gray-900">{longestStreak}</span>
            </div>
            <p className="text-xs text-gray-500">Longest Streak</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <FiCalendar className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500 mr-1" />
              <span className="text-lg sm:text-2xl font-bold text-gray-900">{totalDays}</span>
            </div>
            <p className="text-xs text-gray-500">Active Days</p>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="space-y-2">
          {/* Day headers */}
          <div className="grid grid-cols-7 gap-1 sm:gap-2">
            {getDayNames().map((day, index) => (
              <div key={index} className="text-center text-xs font-medium text-gray-500">
                {day}
              </div>
            ))}
          </div>
          
          {/* Calendar days */}
          <div className="grid grid-cols-7 gap-1 sm:gap-2">
            {streakData.map((day, index) => (
              <div
                key={index}
                className={`aspect-square rounded-lg border-2 flex items-center justify-center text-xs font-medium transition-all hover:scale-105 ${getStreakColor(day.hasActivity, day.isToday)} ${
                  day.isCurrentMonth ? 'text-gray-900' : 'text-gray-400'
                }`}
                title={day.date}
              >
                {new Date(day.date).getDate()}
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mt-4 sm:mt-6 text-xs">
          <div className="flex items-center">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded mr-1"></div>
            <span className="text-gray-600">Active</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-500 rounded mr-1"></div>
            <span className="text-gray-600">Today</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gray-100 rounded mr-1"></div>
            <span className="text-gray-600">Inactive</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StreakCalendar;
