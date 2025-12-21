"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from 'react';
import { FiHome, FiBarChart2, FiFolder, FiUsers, FiSettings, FiHelpCircle, FiSearch, FiBookOpen, FiDollarSign, FiUser, FiLogOut, FiMenu, FiX } from 'react-icons/fi';
import { usePathname, useRouter } from 'next/navigation';
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";
import { getCourses } from "@/lib/auth";

export default function Sidebar() {
  const { user, isAuthenticated, logout } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [courseCategories, setCourseCategories] = useState<string[]>([]);
  const pathname = usePathname();
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/courses?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  useEffect(() => {
    const loadCourseCategories = async () => {
      try {
        const courses = await getCourses();
        const categories = Array.from(new Set((courses || []).map((c: any) => c?.category || 'Other')))
          .filter(Boolean)
          .sort();
        setCourseCategories(categories);
      } catch {
        setCourseCategories([]);
      }
    };

    loadCourseCategories();
  }, []);

  const mainNavItems = [
    {
      name: 'Dashboard',
      href: '/',
      icon: <FiHome className="h-5 w-5" />
    },
    {
      name: 'Analytics',
      href: '/analysis',
      icon: <FiBarChart2 className="h-5 w-5" />
    },
    {
      name: 'Quiz',
      href: '/courses',
      icon: <FiBookOpen className="h-5 w-5" />,
      submenu: true
    },
    {
      name: 'Courses',
      href: '/study-material',
      icon: <FiFolder className="h-5 w-5" />
    },
    {
      name: 'Team',
      href: '/about',
      icon: <FiUsers className="h-5 w-5" />
    },
    {
      name: 'Settings',
      href: '/profile',
      icon: <FiSettings className="h-5 w-5" />
    },
    {
      name: 'Help',
      href: '/contact',
      icon: <FiHelpCircle className="h-5 w-5" />
    }
  ];

  const userMenuItems = isAuthenticated ? [
    {
      name: 'My Profile',
      href: '/profile',
      icon: <FiUser className="h-4 w-4" />
    },
    {
      name: 'Pricing',
      href: '/pricing',
      icon: <FiDollarSign className="h-4 w-4" />
    },
    {
      name: 'Logout',
      href: '#',
      icon: <FiLogOut className="h-4 w-4" />,
      onClick: logout
    }
  ] : [
    {
      name: 'Login',
      href: '/login',
      icon: <FiUser className="h-4 w-4" />
    },
    {
      name: 'Register',
      href: '/register',
      icon: <FiUser className="h-4 w-4" />
    }
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md border border-gray-200"
      >
        {isSidebarOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
      </button>

      {/* Sidebar */}
      <div className={cn(
        "fixed inset-y-0 left-0 z-40 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out lg:translate-x-0",
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-center p-6 border-b border-gray-200">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/preptocrack-logo.svg"
                alt="Prep30"
                width={120}
                height={35}
                className="h-8 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Search */}
          <div className="p-4 border-b border-gray-200">
            <form onSubmit={handleSearch} className="relative">
              <div className="flex items-center bg-gray-50 rounded-lg border border-gray-200">
                <FiSearch className="h-4 w-4 text-gray-400 ml-3" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="w-full py-2 px-3 bg-transparent border-none focus:outline-none text-sm text-gray-700 placeholder-gray-400"
                />
              </div>
            </form>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-4 space-y-2 overflow-y-auto">
            {mainNavItems.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setIsSidebarOpen(false)}
                  className={cn(
                    "flex items-center space-x-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                    pathname === item.href
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  )}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
                
                {/* Submenu for Quiz */}
                {item.submenu && courseCategories.length > 0 && (
                  <div className="ml-6 mt-1 space-y-1">
                    {courseCategories.slice(0, 4).map((category) => (
                      <Link
                        key={category}
                        href={`/courses?category=${category.toLowerCase().replace(/\s+/g, '-')}`}
                        onClick={() => setIsSidebarOpen(false)}
                        className="block px-3 py-1 text-xs text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded"
                      >
                        {category}
                      </Link>
                    ))}
                    <Link
                      href="/courses"
                      onClick={() => setIsSidebarOpen(false)}
                      className="block px-3 py-1 text-xs font-medium text-blue-600 hover:text-blue-700 rounded"
                    >
                      View all →
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* User Section */}
          <div className="p-4 border-t border-gray-200">
            {isAuthenticated && (
              <div className="flex items-center space-x-3 mb-3 px-3">
                <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <FiUser className="h-4 w-4 text-blue-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {user?.name || 'User'}
                  </p>
                  <p className="text-xs text-gray-500 truncate">
                    {user?.email || ''}
                  </p>
                </div>
              </div>
            )}
            
            <div className="space-y-1">
              {userMenuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    if (item.onClick) {
                      e.preventDefault();
                      item.onClick();
                    }
                    setIsSidebarOpen(false);
                  }}
                  className="flex items-center space-x-3 px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-colors"
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </>
  );
}
