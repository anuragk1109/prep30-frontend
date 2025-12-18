"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from 'react';
import { FiMenu, FiX, FiUser, FiLogIn, FiLogOut, FiUserPlus, FiBookOpen, FiSearch, FiChevronDown, FiDollarSign } from 'react-icons/fi';
import { usePathname, useRouter } from 'next/navigation';
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";
import { getCourses } from "@/lib/auth";

export default function Header() {
  const { user, isAuthenticated, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [courseCategories, setCourseCategories] = useState<string[]>([]);
  const searchRef = useRef<HTMLInputElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/courses?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const mainNavLinks = [
    
    { 
      name: 'Courses', 
      href: '/courses',
      submenu: true,
      icon: <FiChevronDown className="ml-1 h-4 w-4" />
    },
    { 
      name: 'About', 
      href: '/about',
      submenu: false
    },
    { 
      name: 'Contact', 
      href: '/contact',
      submenu: false
    },
  ];

  const userNavLinks = [
    { 
      name: 'My Profile', 
      href: '/profile', 
      icon: <FiUser className="mr-2 h-4 w-4" /> 
    },
    { 
      name: 'My Courses', 
      href: '/my-courses', 
      icon: <FiBookOpen className="mr-2 h-4 w-4" /> 
    },
    {
        name:'Pricing',
        href:'/pricing',
        icon:<FiDollarSign className="mr-2 h-4 w-4" />

    },
    { 
      name: 'Logout', 
      href: '#', 
      icon: <FiLogOut className="mr-2 h-4 w-4" />,
      onClick: logout
    },
  ];

  const authLinks = [
    { 
      name: 'Login', 
      href: '/login', 
      icon: <FiLogIn className="mr-2 h-4 w-4" /> 
    },
    { 
      name: 'Register', 
      href: '/register', 
      icon: <FiUserPlus className="mr-2 h-4 w-4" />,
      className: 'bg-blue-600 text-white hover:bg-blue-700'
    },
  ];

  return (
    <header className="fixed w-full z-50 bg-white shadow-md">
      {/* Top Bar with Search */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-600 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Search Bar - Hidden on mobile */}
            <div className="hidden sm:flex flex-1 max-w-2xl mx-4">
              <form onSubmit={handleSearch} className="relative w-full">
                <div className={cn(
                  "flex items-center rounded-lg overflow-hidden transition-all duration-200 shadow-sm",
                  isSearchFocused ? 'ring-2 ring-blue-400' : 'ring-1 ring-blue-200',
                  'bg-white'
                )}>
                  <div className="pl-4 text-gray-400">
                    <FiSearch className="h-5 w-5" />
                  </div>
                  <input
                    type="text"
                    ref={searchRef}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setIsSearchFocused(false)}
                    placeholder="Search for courses..."
                    className={cn(
                      "w-full py-3 px-3 border-none focus:ring-0 focus:outline-none text-gray-800 text-base placeholder-gray-400",
                    )}
                  />
                  {searchQuery && (
                    <button 
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="text-gray-400 hover:text-gray-600 p-2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    </button>
                  )}
                  <button 
                    type="submit"
                    className={cn(
                      "h-full px-6 py-2 flex items-center justify-center transition-colors font-medium",
                      isSearchFocused ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-blue-500 text-white hover:bg-blue-600'
                    )}
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>

            {/* User Actions */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              {isAuthenticated ? (
                <div className="relative">
                  <button 
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    className="flex items-center space-x-1 sm:space-x-2 text-sm font-medium text-white hover:text-blue-100 focus:outline-none"
                  >
                    <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-blue-800 flex items-center justify-center">
                      <FiUser className="h-3 w-3 sm:h-4 sm:w-4" />
                    </div>
                    <span className="hidden sm:inline">{user?.name || 'My Account'}</span>
                    <FiChevronDown className="hidden sm:block h-3 w-3 sm:h-4 sm:w-4" />
                  </button>
                  
                  {isUserMenuOpen && (
                    <>
                      {/* Backdrop to hide content behind */}
                      <div 
                        className="fixed inset-0 z-40"
                        onClick={() => setIsUserMenuOpen(false)}
                      />
                      <div className="absolute right-0 mt-2 w-48 sm:w-56 rounded-md shadow-xl bg-white border border-gray-200 z-50">
                        <div className="py-1">
                          {userNavLinks.map((link) => (
                            <Link
                              key={link.name}
                              href={link.href}
                              onClick={(e) => {
                                if (link.onClick) {
                                  e.preventDefault();
                                  link.onClick();
                                }
                                setIsUserMenuOpen(false);
                              }}
                              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                            >
                              {link.icon}
                              {link.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ) : (
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <Link
                    href="/login"
                    className="px-2 sm:px-4 py-2 text-xs sm:text-sm font-medium text-white hover:text-blue-100"
                  >
                    Sign In
                  </Link>
                  <span className="text-blue-300 hidden sm:inline">|</span>
                  <Link
                    href="/register"
                    className="px-2 sm:px-4 py-2 text-xs sm:text-sm font-medium text-white bg-blue-800 hover:bg-blue-900 rounded-md transition-colors"
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image
                  src="/prep30.svg"
                  alt="Prep30"
                  width={140}
                  height={40}
                  className="h-10 w-auto"
                  priority
                />
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-1">
              {mainNavLinks.map((link) => (
                <div key={link.name} className="relative group">
                  <Link
                    href={link.href}
                    className={cn(
                      "px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors flex items-center",
                      pathname === link.href ? 'text-blue-600' : 'text-gray-700'
                    )}
                  >
                    {link.name}
                    {link.submenu && link.icon}
                  </Link>
                  
                  {link.submenu && (
                    <div className="absolute left-0 mt-1 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                      <div className="py-1">
                        {courseCategories.slice(0, 6).map((category) => (
                          <Link
                            key={category}
                            href={`/courses?category=${category.toLowerCase().replace(/\s+/g, '-')}`}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            {category}
                          </Link>
                        ))}
                        <div className="border-t border-gray-100 my-1"></div>
                        <Link
                          href="/courses"
                          className="block px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50"
                        >
                          View all courses
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <FiX className="block h-6 w-6" />
                ) : (
                  <FiMenu className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="pt-2 pb-3 space-y-1 bg-white">
            {/* Mobile Search */}
            <div className="px-4 py-2">
              <form onSubmit={handleSearch} className="relative w-full">
                <div className="flex items-center rounded-lg overflow-hidden shadow-sm border border-gray-300">
                  <div className="pl-3 text-gray-400">
                    <FiSearch className="h-4 w-4" />
                  </div>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search courses..."
                    className="w-full py-2 px-3 border-none focus:ring-0 focus:outline-none text-gray-800 text-sm placeholder-gray-400"
                  />
                  <button
                    type="submit"
                    className="px-3 py-2 bg-blue-600 text-white text-sm font-medium hover:bg-blue-700"
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
            
            {mainNavLinks.map((link) => (
              <div key={link.name}>
                <Link
                  href={link.href}
                  className={`block px-4 py-2 text-base font-medium ${
                    pathname === link.href 
                      ? 'text-blue-600 bg-blue-50' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
                {link.submenu && (
                  <div className="pl-6">
                    {courseCategories.slice(0, 4).map((category) => (
                      <Link
                        key={category}
                        href={`/courses?category=${category.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {category}
                      </Link>
                    ))}
                    <Link
                      href="/courses"
                      className="block px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      View all courses →
                    </Link>
                  </div>
                )}
              </div>
            ))}
            
            <div className="border-t border-gray-200 my-2"></div>
            
            {isAuthenticated ? (
              <div className="px-4 py-2">
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">My Account</p>
                {userNavLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      if (link.onClick) {
                        e.preventDefault();
                        link.onClick();
                      }
                      setIsMenuOpen(false);
                    }}
                    className="block px-2 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            ) : (
              <div className="px-4 pt-2 pb-4 space-y-2">
                <Link
                  href="/login"
                  className="w-full block text-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-blue-700 bg-blue-100 hover:bg-blue-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign In
                </Link>
                <Link
                  href="/register"
                  className="w-full block text-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Create Account
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}