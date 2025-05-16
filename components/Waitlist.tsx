import React from 'react';
import { SendIcon } from 'lucide-react';
export const Waitlist = () => {
  return <section id="waitlist" className="py-20 bg-pink-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 bg-pink-500 p-12 text-white flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-6">
                Be the first to experience AfterMatch
              </h2>
              <p className="mb-8">
                Join our waitlist and get early access to the app that's
                transforming how couples connect after matching.
              </p>
              <div className="flex items-center text-sm">
                <span className="flex items-center mr-4">
                  <div className="w-3 h-3 rounded-full bg-white mr-2"></div>
                  Early access
                </span>
                <span className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-white mr-2"></div>
                  Exclusive features
                </span>
              </div>
            </div>
            <div className="md:w-1/2 p-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Join the Waitlist
              </h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input type="text" id="name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition-colors" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input type="email" id="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition-colors" placeholder="your@email.com" />
                </div>
                <button type="submit" className="w-full bg-pink-500 hover:bg-pink-600 text-white font-medium px-6 py-3 rounded-lg transition-colors flex items-center justify-center">
                  Join Waitlist
                  <SendIcon className="ml-2 h-5 w-5" />
                </button>
                <p className="text-xs text-gray-500 text-center mt-4">
                  We'll never share your information with third parties.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>;
};