import { FiShield, FiAlertTriangle, FiMail, FiClock } from 'react-icons/fi';

const PrivacyPolicy = () => {
  const lastUpdated = 'January 1, 2024';

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-sky-100">
            <FiShield className="h-8 w-8 text-sky-600" />
          </div>
          <h1 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-lg text-gray-500">
            Last updated: {lastUpdated}
          </p>
        </div>

        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6 bg-gray-50">
            <h2 className="text-lg leading-6 font-medium text-gray-900">
              Your privacy is important to us
            </h2>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
            </p>
          </div>
          
          <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">1. Information We Collect</h3>
                <div className="mt-4 space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-sky-500">
                      <FiAlertTriangle className="h-5 w-5" />
                    </div>
                    <div className="ml-3">
                      <h4 className="text-base font-medium text-gray-900">Personal Information</h4>
                      <p className="mt-1 text-sm text-gray-600">
                        We may collect personal identification information including but not limited to name, email address, phone number, and payment information when you register on our site, place an order, subscribe to our newsletter, or fill out a form.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-sky-500">
                      <FiClock className="h-5 w-5" />
                    </div>
                    <div className="ml-3">
                      <h4 className="text-base font-medium text-gray-900">Usage Data</h4>
                      <p className="mt-1 text-sm text-gray-600">
                        We collect information about how you access and use our Service, including pages visited, time spent on pages, and other diagnostic data.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">2. How We Use Your Information</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>To provide and maintain our Service</li>
                  <li>To notify you about changes to our Service</li>
                  <li>To allow you to participate in interactive features of our Service</li>
                  <li>To provide customer support</li>
                  <li>To gather analysis or valuable information to improve our Service</li>
                  <li>To monitor the usage of our Service</li>
                  <li>To detect, prevent and address technical issues</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">3. Data Security</h3>
                <p className="text-gray-700">
                  We implement appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information, username, password, transaction information, and data stored on our site.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">4. Third-Party Services</h3>
                <p className="text-gray-700">
                  We may employ third-party companies and individuals to facilitate our Service, provide the Service on our behalf, perform Service-related services, or assist us in analyzing how our Service is used. These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">5. Your Data Protection Rights</h3>
                <p className="text-gray-700 mb-4">
                  Depending on your location, you may have certain rights regarding your personal information, including:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>The right to access, update, or delete your information</li>
                  <li>The right to rectification of your personal data</li>
                  <li>The right to object to our processing of your personal data</li>
                  <li>The right to request restriction of processing your personal data</li>
                  <li>The right to data portability</li>
                  <li>The right to withdraw consent</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">6. Children's Privacy</h3>
                <p className="text-gray-700">
                  Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If you are a parent or guardian and you are aware that your child has provided us with Personal Data, please contact us.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">7. Changes to This Privacy Policy</h3>
                <p className="text-gray-700">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <FiMail className="h-5 w-5 text-blue-400" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-blue-800">Contact Us</h3>
                    <div className="mt-2 text-sm text-blue-700">
                      <p>
                        If you have any questions about this Privacy Policy, please contact us at{' '}
                        <a href="mailto:privacy@prep30.com" className="font-medium text-blue-600 hover:text-blue-500">
                          privacy@prep30.com
                        </a>
                        .
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;