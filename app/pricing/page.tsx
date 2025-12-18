'use client';

import { FiCheck, FiZap } from 'react-icons/fi';
import { useRouter } from 'next/navigation';

const plan = {
  name: 'Monthly Subscription',
  price: '₹30',
  description: 'Unlock all quizzes with one simple monthly plan.',
  features: [
    'Unlock all quizzes',
    'Unlimited attempts',
    'Access on all devices',
    'Cancel anytime'
  ],
  cta: 'Proceed to Payment'
};

export default function PricingPage() {
  const router = useRouter();

  return (
    <div className="pt-24 pb-16 bg-gradient-to-b from-sky-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-sky-900 mb-4">Simple, Transparent Pricing</h1>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
            One plan. One price. Unlimited quiz access.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mt-12 sm:mt-16 flex justify-center">
          <div className="w-full max-w-lg rounded-2xl border border-sky-500 bg-white shadow-lg p-6 sm:p-8">
            <div className="flex items-center justify-center gap-2 text-sky-700">
              <FiZap className="h-5 w-5" />
              <p className="text-sm font-semibold">Single Plan</p>
            </div>
            <h3 className="mt-3 text-xl font-semibold text-gray-900 text-center">{plan.name}</h3>
            <p className="mt-2 text-center text-sm text-gray-600">{plan.description}</p>

            <div className="mt-6 flex items-end justify-center">
              <span className="text-5xl font-bold tracking-tight text-gray-900">{plan.price}</span>
              <span className="ml-2 text-base font-medium text-gray-500">/month</span>
            </div>

            <div className="mt-6">
              <ul role="list" className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <FiCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span className="ml-3 text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <button
                type="button"
                onClick={() => router.push('/payment')}
                className="block w-full rounded-md border border-transparent bg-sky-600 px-6 py-3 text-center text-sm font-medium text-white hover:bg-sky-700"
              >
                {plan.cta}
              </button>
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