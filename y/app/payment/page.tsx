'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function PaymentPage() {
  const router = useRouter();

  return (
    <div className="pt-24 pb-16 bg-gradient-to-b from-sky-50 to-white min-h-screen">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-2xl p-6 sm:p-8 border border-gray-200">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Payment</h1>
          <p className="mt-2 text-sm sm:text-base text-gray-600">
            You are subscribing to the <span className="font-semibold">₹30/month</span> plan that unlocks all quizzes.
          </p>

          <div className="mt-6 rounded-xl border border-sky-200 bg-sky-50 p-4">
            <p className="text-sm text-sky-900">
              Payment option will be released soon.
            </p>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => router.back()}
              className="w-full sm:w-auto rounded-md border border-gray-300 bg-white px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Go Back
            </button>
            <Link
              href="/pricing"
              className="w-full sm:w-auto rounded-md border border-transparent bg-sky-600 px-5 py-3 text-center text-sm font-medium text-white hover:bg-sky-700"
            >
              View Plan
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
