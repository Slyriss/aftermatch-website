import React, { memo } from 'react';
import { HeartIcon, ArrowRightIcon } from 'lucide-react';
export const Hero = () => {
  return <section className="py-20 md:py-32 bg-gradient-to-b from-pink-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-pink-100 text-pink-600 mb-6">
              <HeartIcon className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">
                Relationships that last
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
              Your relationship journey{' '}
              <span className="text-pink-500">starts after matching</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 md:pr-8">
              AfterMatch helps couples build emotional memory, track food
              preferences, and remember important moments—turning matches into
              meaningful relationships.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#waitlist" className="bg-pink-500 hover:bg-pink-600 text-white text-center font-medium px-8 py-3 rounded-full transition-colors flex items-center justify-center">
                Join the Waitlist
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </a>
              <a href="#features" className="bg-white hover:bg-gray-100 text-gray-800 text-center border border-gray-300 font-medium px-8 py-3 rounded-full transition-colors">
                Learn More
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-pink-200 rounded-full opacity-30 blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-orange-200 rounded-full opacity-30 blur-3xl"></div>
              <img src="https://images.unsplash.com/photo-1540331547168-8b63109225b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Happy couple using AfterMatch app" className="relative z-10 rounded-2xl shadow-xl object-cover w-full max-w-md mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};