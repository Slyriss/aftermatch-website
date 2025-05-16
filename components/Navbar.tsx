import React from 'react';
import { HeartIcon } from 'lucide-react';
export const Navbar = () => {
  return <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-pink-100">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <HeartIcon className="h-6 w-6 text-pink-500 mr-2" />
          <span className="font-semibold text-xl text-gray-800">
            AfterMatch
          </span>
        </div>
        <div className="hidden md:flex space-x-8">
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
        <button className="bg-pink-500 hover:bg-pink-600 text-white font-medium px-4 py-2 rounded-full transition-colors">
          Early Access
        </button>
      </div>
    </nav>;
};