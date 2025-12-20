'use client';

import { useState, useEffect } from 'react';
import { FiUser, FiMail, FiPhone, FiEdit2, FiLogOut, FiBookOpen, FiSettings, FiChevronRight, FiTrendingUp, FiTarget, FiActivity } from 'react-icons/fi';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import QuizHistory from '@/components/quiz-history';
import StreakCalendar from '@/components/streak-calendar';
import { getUserStats } from '@/lib/quiz';

interface UserStats {
  totalQuizzes: number;
  averageScore: number;
  bestScore: number;
  coursesEnrolled: number;
}

const Profile = () => {
  const { user, isAuthenticated, logout, getCurrentStreak, token } = useAuth();
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [userStats, setUserStats] = useState<UserStats>({
    totalQuizzes: 0,
    averageScore: 0,
    bestScore: 0,
    coursesEnrolled: 0
  });
  const [statsLoading, setStatsLoading] = useState(true);

  useEffect(() => {
    const fetchUserStats = async () => {
      if (!isAuthenticated || !user || !token) return;

      try {
        const stats = await getUserStats(user.id, token);
        setUserStats({
          totalQuizzes: stats.totalQuizzes || 0,
          averageScore: stats.averageScore || 0,
          bestScore: stats.bestScore || 0,
          coursesEnrolled: stats.coursesEnrolled || 0
        });
      } catch (error) {
        console.error('Error fetching user stats:', error);
      } finally {
        setStatsLoading(false);
      }
    };

    fetchUserStats();
  }, [isAuthenticated, user, token]);

  if (!isAuthenticated || !user) {
    router.push('/login');
    return null;
  }

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  const currentStreak = getCurrentStreak();

  const profileSections = [
    {
      title: 'Personal Information',
      icon: <FiUser className="h-5 w-5" />,
      fields: [
        { label: 'Full Name', value: user.name, icon: <FiUser className="h-4 w-4" /> },
        { label: 'Email Address', value: user.email, icon: <FiMail className="h-4 w-4" /> },
        { label: 'Mobile Number', value: user.mobile, icon: <FiPhone className="h-4 w-4" /> },
      ]
    },
    {
      title: 'Account Settings',
      icon: <FiSettings className="h-5 w-5" />,
      items: [
        { name: 'Edit Profile', href: '/profile/edit', icon: <FiEdit2 className="h-4 w-4" /> },
        { name: 'My Courses', href: '/my-courses', icon: <FiBookOpen className="h-4 w-4" /> },
        { name: 'Account Settings', href: '/settings', icon: <FiSettings className="h-4 w-4" /> },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-4 sm:pt-8 pb-8 sm:pb-12 mt-2">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        {/* Profile Header */}
        <div className="bg-white shadow rounded-lg mb-4 sm:mb-6">
          <div className="px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20 rounded-full bg-blue-600 flex items-center justify-center">
                  <FiUser className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-white" />
                </div>
                <div>
                  <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">{user.name}</h1>
                  <p className="text-gray-600 text-sm sm:text-base">{user.email}</p>
                  <span className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mt-1">
                    {user.role}
                  </span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="flex items-center justify-center px-3 sm:px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <FiEdit2 className="mr-2 h-4 w-4" />
                  Edit Profile
                </button>
                <button
                  onClick={handleLogout}
                  className="flex items-center justify-center px-3 sm:px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  <FiLogOut className="mr-2 h-4 w-4" />
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 shadow rounded-lg p-3 sm:p-4 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-xs sm:text-sm">Total Quizzes</p>
                <p className="text-lg sm:text-2xl font-bold">
                  {statsLoading ? '...' : userStats.totalQuizzes}
                </p>
              </div>
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-blue-400 flex items-center justify-center">
                <FiBookOpen className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-500 to-green-600 shadow rounded-lg p-3 sm:p-4 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-xs sm:text-sm">Avg Score</p>
                <p className="text-lg sm:text-2xl font-bold">
                  {statsLoading ? '...' : `${userStats.averageScore}%`}
                </p>
              </div>
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-green-400 flex items-center justify-center">
                <FiTrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-500 to-orange-600 shadow rounded-lg p-3 sm:p-4 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-100 text-xs sm:text-sm">Current Streak</p>
                <p className="text-lg sm:text-2xl font-bold">{currentStreak}</p>
              </div>
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-orange-400 flex items-center justify-center">
                <FiActivity className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-500 to-purple-600 shadow rounded-lg p-3 sm:p-4 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-xs sm:text-sm">Best Score</p>
                <p className="text-lg sm:text-2xl font-bold">
                  {statsLoading ? '...' : `${userStats.bestScore}%`}
                </p>
              </div>
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-purple-400 flex items-center justify-center">
                <FiTarget className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Main Content */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6">
          {/* Quiz History - Takes 2 columns on large screens */}
          <div className="xl:col-span-2">
            <QuizHistory userId={user.id} />
          </div>

          {/* Streak Calendar - Takes 1 column */}
          <div className="xl:col-span-1">
            <StreakCalendar userId={user.id} />
          </div>
        </div>

        {/* Personal Information Section */}
        <div className="mt-4 sm:mt-6 bg-white shadow rounded-lg">
          <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <FiUser className="h-5 w-5 text-gray-500 mr-2" />
                <h2 className="text-lg font-medium text-gray-900">Profile Information</h2>
              </div>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="flex items-center px-2 sm:px-3 py-1 text-xs sm:text-sm border border-gray-300 rounded-md hover:bg-gray-50"
              >
                <FiEdit2 className="mr-1 h-3 w-3" />
                Edit
              </button>
            </div>
          </div>
          <div className="px-4 sm:px-6 py-3 sm:py-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {profileSections[0]?.fields?.map((field) => (
                <div key={field.label} className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-gray-100 flex items-center justify-center">
                      {field.icon}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{field.label}</p>
                    <p className="text-sm text-gray-500 break-all">{field.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;