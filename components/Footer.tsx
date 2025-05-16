import React from 'react';
import { HeartIcon, InstagramIcon, TwitterIcon, FacebookIcon } from 'lucide-react';
export const Footer = () => {
  return <footer className="bg-white border-t border-pink-100 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <HeartIcon className="h-6 w-6 text-pink-500 mr-2" />
            <span className="font-semibold text-xl text-gray-800">
              AfterMatch
            </span>
          </div>
          <div className="flex space-x-8 mb-6 md:mb-0">
            <a href="#features" className="text-gray-600 hover:text-pink-500 transition-colors">
              Features
            </a>
            <a href="#mockups" className="text-gray-600 hover:text-pink-500 transition-colors">
              App
            </a>
            <a href="#waitlist" className="text-gray-600 hover:text-pink-500 transition-colors">
              Join Waitlist
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
              <TwitterIcon className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
              <FacebookIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} AfterMatch. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-pink-500 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-pink-500 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>;
};