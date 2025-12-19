'use client';

import React from 'react';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';

type RequiredLevel = 'premium' | 'pro';

interface SubscriptionCheckProps {
  children: React.ReactNode;
  requiredLevel?: RequiredLevel;
  feature?: string;
  className?: string;
}

export function SubscriptionCheck({ children, requiredLevel = 'premium', feature, className }: SubscriptionCheckProps) {
  const { user, isAuthenticated, isLoading } = useAuth();

  if (isLoading) return null;

  if (!isAuthenticated || !user) {
    return (
      <div className={className}>
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 text-center">Login Required</h2>
          <p className="mt-2 text-sm text-gray-600 text-center">
            Please login to continue.
          </p>
          <div className="mt-5">
            <Link
              href="/login"
              className="block w-full text-center rounded-md bg-sky-600 px-4 py-2 text-sm font-medium text-white hover:bg-sky-700"
            >
              Go to Login
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const status = user?.subscription?.status || user?.subscriptionStatus;
  const hasAccess = status === 'active' || status === 'trial';

  if (hasAccess) return <>{children}</>;

  return (
    <div className={className}>
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 text-center">Subscription Required</h2>
        <p className="mt-2 text-sm text-gray-600 text-center">
          {feature
            ? `This ${feature} requires a ${requiredLevel} subscription.`
            : `This content requires a ${requiredLevel} subscription.`}
        </p>

        <div className="mt-5 space-y-3">
          <Link
            href="/pricing"
            className="block w-full text-center rounded-md bg-sky-600 px-4 py-2 text-sm font-medium text-white hover:bg-sky-700"
          >
            Subscribe Now
          </Link>
          <Link
            href="/profile"
            className="block w-full text-center rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50"
          >
            View Account
          </Link>
        </div>
      </div>
    </div>
  );
}
