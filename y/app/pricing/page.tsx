'use client';

import { useState } from 'react';
import { FiCheck, FiX, FiZap, FiAward, FiClock, FiHelpCircle } from 'react-icons/fi';

const pricingPlans = [
  {
    name: 'Basic',
    price: { monthly: '₹999', annually: '₹9,999' },
    description: 'Perfect for getting started with your exam preparation',
    features: [
      'Access to 5 quizzes per day',
      'Basic performance analytics',
      'Email support',
      'Access to free courses',
      'Limited test series (5 per month)'
    ],
    missingFeatures: [
      'Advanced analytics',
      'Personalized study plan',
      'Priority support',
      'Full test series access',
      'Offline access'
    ],
    popular: false,
    cta: 'Get Started',
    featured: false
  },
  {
    name: 'Pro',
    price: { monthly: '₹1,999', annually: '₹19,999' },
    description: 'For serious aspirants who want to excel',
    features: [
      'Unlimited quiz access',
      'Advanced performance analytics',
      'Personalized study plan',
      'Access to all courses',
      'Unlimited test series',
      'Priority email support',
      'Offline access',
      'Monthly live sessions'
    ],
    missingFeatures: [
      '1-on-1 mentorship',
      'Doubt solving within 1 hour'
    ],
    popular: true,
    cta: 'Start Free Trial',
    featured: true
  },
  {
    name: 'Elite',
    price: { monthly: '₹3,999', annually: '₹39,999' },
    description: 'For top rankers and serious competitors',
    features: [
      'Everything in Pro, plus:',
      '1-on-1 mentorship',
      'Doubt solving within 1 hour',
      'Custom study plans',
      'Weekly progress calls',
      'Priority access to new features',
      'Exam strategy sessions',
      'Interview preparation',
      'Resume building',
      'Career counseling'
    ],
    missingFeatures: [],
    popular: false,
    cta: 'Contact Sales',
    featured: false
  }
];

const features = [
  {
    name: 'Daily Practice Quizzes',
    description: 'Access to daily updated quizzes',
    tiers: { Basic: true, Pro: true, Elite: true }
  },
  {
    name: 'Full Test Series',
    description: 'Complete test series for exam preparation',
    tiers: { Basic: '5/month', Pro: 'Unlimited', Elite: 'Unlimited + Advanced' }
  },
  {
    name: 'Performance Analytics',
    description: 'Detailed analysis of your performance',
    tiers: { Basic: 'Basic', Pro: 'Advanced', Elite: 'Advanced + Personal Coach' }
  },
  {
    name: 'Video Lessons',
    description: 'Access to recorded video lectures',
    tiers: { Basic: 'Limited', Pro: 'Full Access', Elite: 'Full Access + Live' }
  },
  {
    name: 'Doubt Solving',
    description: 'Get your doubts resolved',
    tiers: { Basic: '48h', Pro: '12h', Elite: '1h' }
  },
  {
    name: 'Study Material',
    description: 'PDFs and study notes',
    tiers: { Basic: '✓', Pro: '✓', Elite: '✓ + Printed' }
  },
  {
    name: 'Mock Interviews',
    description: 'Practice interviews with experts',
    tiers: { Basic: '✗', Pro: '2/month', Elite: 'Unlimited' }
  },
  {
    name: 'Personal Mentor',
    description: 'Dedicated mentor for guidance',
    tiers: { Basic: '✗', Pro: '✗', Elite: '✓' }
  }
];

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annually'>('annually');
  const [showAnnualSavings, setShowAnnualSavings] = useState(true);

  const toggleBillingCycle = () => {
    setBillingCycle(prev => prev === 'monthly' ? 'annually' : 'monthly');
  };

  // Calculate savings percentage
  const savingsPercentage = (plan: string) => {
    if (billingCycle === 'monthly') return 0;
    const monthlyPrice = parseFloat(pricingPlans.find(p => p.name === plan)?.price.monthly.replace(/[^0-9]/g, '') || '0');
    const annualPrice = parseFloat(pricingPlans.find(p => p.name === plan)?.price.annually.replace(/[^0-9]/g, '') || '0');
    return Math.round(((monthlyPrice * 12 - annualPrice) / (monthlyPrice * 12)) * 100);
  };

  return (
    <div className="pt-24 pb-16 bg-gradient-to-b from-sky-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-sky-900 mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your exam preparation journey. Start for free, no credit card required.
          </p>
          
          {/* Billing Toggle */}
          <div className="mt-8 flex items-center justify-center">
            <span className={`mr-4 font-medium ${billingCycle === 'monthly' ? 'text-sky-700' : 'text-gray-500'}`}>
              Monthly Billing
            </span>
            <button
              type="button"
              className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 ${
                billingCycle === 'annually' ? 'bg-sky-600' : 'bg-gray-200'
              }`}
              onClick={toggleBillingCycle}
              aria-pressed={billingCycle === 'annually'}
            >
              <span className="sr-only">Toggle billing cycle</span>
              <span
                aria-hidden="true"
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                  billingCycle === 'annually' ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
            <div className="ml-4">
              <span className={`font-medium ${billingCycle === 'annually' ? 'text-sky-700' : 'text-gray-500'}`}>
                Annual Billing
              </span>
              {billingCycle === 'annually' && (
                <span className="ml-2 inline-flex items-center rounded-full bg-green-100 px-3 py-0.5 text-sm font-medium text-green-800">
                  Save up to 20%
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="mt-12 space-y-4 sm:mt-16 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:mx-auto lg:max-w-5xl xl:mx-0 xl:max-w-none xl:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border ${
                plan.featured
                  ? 'border-sky-500 bg-white shadow-lg sm:scale-105'
                  : 'border-gray-200 bg-white/60'
              } p-8`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 transform">
                  <div className="rounded-full bg-sky-500 px-4 py-1 text-sm font-semibold text-white">
                    Most popular
                  </div>
                </div>
              )}
              <h3 className="text-lg font-medium leading-6 text-gray-900">{plan.name}</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-bold tracking-tight text-gray-900">
                  {billingCycle === 'monthly' ? plan.price.monthly : plan.price.annually}
                </span>
                <span className="ml-1 text-lg font-medium text-gray-500">
                  {billingCycle === 'monthly' ? '/month' : '/year'}
                </span>
              </div>
              {billingCycle === 'annually' && savingsPercentage(plan.name) > 0 && (
                <p className="mt-1 text-sm text-green-600">
                  Save {savingsPercentage(plan.name)}% annually
                </p>
              )}
              <p className="mt-4 text-sm text-gray-500">{plan.description}</p>
              <div className="mt-6">
                <ul role="list" className="space-y-4">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex">
                      <FiCheck className="h-5 w-5 flex-shrink-0 text-green-500" />
                      <span className="ml-3 text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                  {plan.missingFeatures.map((feature, index) => (
                    <li key={`missing-${index}`} className="flex text-gray-400">
                      <FiX className="h-5 w-5 flex-shrink-0" />
                      <span className="ml-3 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8">
                <button
                  type="button"
                  className={`block w-full rounded-md border border-transparent px-6 py-3 text-center text-sm font-medium ${
                    plan.featured
                      ? 'bg-sky-600 text-white hover:bg-sky-700'
                      : 'bg-sky-100 text-sky-700 hover:bg-sky-200'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Comparison */}
        <div className="mt-24">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-12">Compare Plans</h2>
          
          <div className="mt-8 flex flex-col">
            <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                          Feature
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900">
                          Basic
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-sky-700 bg-sky-50">
                          Pro
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900">
                          Elite
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {features.map((feature, index) => (
                        <tr key={feature.name} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                            <div className="font-medium text-gray-900">{feature.name}</div>
                            <div className="text-gray-500">{feature.description}</div>
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-center text-sm text-gray-500">
                            {typeof feature.tiers.Basic === 'boolean' ? (
                              feature.tiers.Basic ? (
                                <FiCheck className="mx-auto h-5 w-5 text-green-500" />
                              ) : (
                                <FiX className="mx-auto h-5 w-5 text-gray-400" />
                              )
                            ) : (
                              <span>{feature.tiers.Basic}</span>
                            )}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-center text-sm font-medium text-sky-700 bg-sky-50">
                            {typeof feature.tiers.Pro === 'boolean' ? (
                              feature.tiers.Pro ? (
                                <FiCheck className="mx-auto h-5 w-5 text-green-500" />
                              ) : (
                                <FiX className="mx-auto h-5 w-5 text-gray-400" />
                              )
                            ) : (
                              <span className="font-semibold">{feature.tiers.Pro}</span>
                            )}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-center text-sm text-gray-500">
                            {typeof feature.tiers.Elite === 'boolean' ? (
                              feature.tiers.Elite ? (
                                <FiCheck className="mx-auto h-5 w-5 text-green-500" />
                              ) : (
                                <FiX className="mx-auto h-5 w-5 text-gray-400" />
                              )
                            ) : (
                              <span>{feature.tiers.Elite}</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-24">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: 'Can I switch plans later?',
                  answer: 'Yes, you can upgrade or downgrade your plan at any time. The change will be effective immediately, and you\'ll be charged the new rate on your next billing cycle.'
                },
                {
                  question: 'Is there a free trial available?',
                  answer: 'Yes, we offer a 7-day free trial for the Pro plan. No credit card is required to start your free trial.'
                },
                {
                  question: 'What payment methods do you accept?',
                  answer: 'We accept all major credit and debit cards, UPI, and net banking. We also support payments through PayPal and other popular payment gateways.'
                },
                {
                  question: 'Can I get a refund if I\'m not satisfied?',
                  answer: 'We offer a 30-day money-back guarantee. If you\'re not satisfied with our service, you can request a full refund within 30 days of your purchase.'
                },
                {
                  question: 'Do you offer discounts for students?',
                  answer: 'Yes, we offer a 20% discount for students with a valid student ID. Contact our support team with your student ID to claim your discount.'
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white shadow rounded-lg overflow-hidden">
                  <button
                    className="w-full px-6 py-4 text-left focus:outline-none"
                    onClick={(e) => {
                      const content = e.currentTarget.nextElementSibling as HTMLElement;
                      content.style.display = content.style.display === 'none' ? 'block' : 'none';
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                      <svg
                        className="h-5 w-5 text-gray-400 transform transition-transform"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </button>
                  <div className="px-6 pb-4 text-gray-600" style={{ display: 'none' }}>
                    {faq.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-sky-700 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
          <p className="text-sky-100 mb-6 max-w-2xl mx-auto">
            Our support team is here to help you choose the right plan for your needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-sky-700 hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition-colors">
              Contact Support
            </button>
            <button className="border border-white text-white hover:bg-sky-800 font-medium py-3 px-6 rounded-lg transition-colors">
              Schedule a Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}