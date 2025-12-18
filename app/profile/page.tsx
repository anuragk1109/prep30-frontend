'use client';

import { useState } from 'react';
import { FiUser, FiMail, FiPhone, FiEdit2, FiLogOut, FiBookOpen, FiSettings, FiChevronRight } from 'react-icons/fi';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';

const Profile = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);

  if (!isAuthenticated || !user) {
    router.push('/login');
    return null;
  }

  const handleLogout = () => {
    logout();
    router.push('/');
  };

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
    <div className="min-h-screen bg-gray-50 pt-8 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <div className="bg-white shadow rounded-lg mb-6">
          <div className="px-4 py-6 sm:px-8 sm:py-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
              <div className="flex items-center space-x-4">
                <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-blue-600 flex items-center justify-center">
                  <FiUser className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                </div>
                <div>
                  <h1 className="text-xl sm:text-2xl font-bold text-gray-900">{user.name}</h1>
                  <p className="text-gray-600 text-sm sm:text-base">{user.email}</p>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mt-1">
                    {user.role}
                  </span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <FiEdit2 className="mr-2 h-4 w-4" />
                  Edit Profile
                </button>
                <button
                  onClick={handleLogout}
                  className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  <FiLogOut className="mr-2 h-4 w-4" />
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Personal Information */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex items-center">
                <FiUser className="h-5 w-5 text-gray-500 mr-2" />
                <h2 className="text-lg font-medium text-gray-900">Personal Information</h2>
              </div>
            </div>
            <div className="px-6 py-4">
              <dl className="space-y-4">
                {profileSections[0]?.fields?.map((field) => (
                  <div key={field.label} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center">
                          {field.icon}
                        </div>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">{field.label}</p>
                        <p className="text-sm text-gray-500">{field.value}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex items-center">
                <FiSettings className="h-5 w-5 text-gray-500 mr-2" />
                <h2 className="text-lg font-medium text-gray-900">Quick Actions</h2>
              </div>
            </div>
            <div className="px-6 py-4">
              <nav className="space-y-2">
                {profileSections[1]?.items?.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  >
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        {item.icon}
                      </div>
                      <div className="ml-3">
                        {item.name}
                      </div>
                    </div>
                    <FiChevronRight className="h-4 w-4 text-gray-400" />
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-white shadow rounded-lg p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <FiBookOpen className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold text-gray-900">0</p>
                <p className="text-sm text-gray-500">Courses Enrolled</p>
              </div>
            </div>
          </div>

          <div className="bg-white shadow rounded-lg p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                  <FiUser className="h-6 w-6 text-green-600" />
                </div>
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold text-gray-900">{user.name}</p>
                <p className="text-sm text-gray-500">Member Since</p>
              </div>
            </div>
          </div>

          <div className="bg-white shadow rounded-lg p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <FiSettings className="h-6 w-6 text-purple-600" />
                </div>
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold text-gray-900">{user.role}</p>
                <p className="text-sm text-gray-500">Account Type</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;