'use client';

import { useState } from 'react';
import { FiMapPin, FiPhone, FiMail, FiClock, FiSend } from 'react-icons/fi';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    alert('Thank you for your message! We will get back to you soon.');
  };

  const contactInfo = [
    {
      icon: <FiMapPin className="w-6 h-6 text-sky-600" />,
      title: 'Our Location',
      description: '123 Education Street, Learning City, 110001',
      link: 'https://maps.google.com',
      linkText: 'View on Map'
    },
    {
      icon: <FiPhone className="w-6 h-6 text-sky-600" />,
      title: 'Phone Number',
      description: '+91 98765 43210',
      link: 'tel:+919876543210',
      linkText: 'Call Now'
    },
    {
      icon: <FiMail className="w-6 h-6 text-sky-600" />,
      title: 'Email Address',
      description: 'support@prep30.com',
      link: 'mailto:support@prep30.com',
      linkText: 'Send Email'
    },
    {
      icon: <FiClock className="w-6 h-6 text-sky-600" />,
      title: 'Working Hours',
      description: 'Mon - Sat: 9:00 AM - 6:00 PM',
      link: '',
      linkText: ''
    }
  ];

  return (
    <div className="pt-24 pb-16 bg-gradient-to-b from-sky-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-sky-900 mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions or feedback? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
            <p className="text-gray-600 mb-8">
              Feel free to reach out to us with any questions or inquiries. Our team is here to help you with your exam preparation journey.
            </p>
            
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-sky-100">
                      {item.icon}
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                    {item.link && (
                      <a 
                        href={item.link} 
                        className="text-sm font-medium text-sky-600 hover:text-sky-700 mt-1 inline-block"
                      >
                        {item.linkText} →
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media Links */}
            <div className="mt-10">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {[
                  { name: 'Facebook', icon: 'facebook', url: '#' },
                  { name: 'Twitter', icon: 'twitter', url: '#' },
                  { name: 'Instagram', icon: 'instagram', url: '#' },
                  { name: 'LinkedIn', icon: 'linkedin', url: '#' },
                  { name: 'YouTube', icon: 'youtube', url: '#' },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="text-gray-400 hover:text-sky-600"
                    aria-label={social.name}
                  >
                    <span className="sr-only">{social.name}</span>
                    <div className="h-8 w-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-sky-100">
                      <i className={`fab fa-${social.icon} text-lg`}></i>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                  placeholder="How can we help you?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                  placeholder="Type your message here..."
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center items-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition-colors"
                >
                  <FiSend className="mr-2" />
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 bg-gray-100 rounded-xl overflow-hidden">
          <div className="h-96 w-full">
            {/* Replace with your actual map embed code */}
            <div className="h-full w-full bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500">Map will be displayed here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
