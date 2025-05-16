import React, { memo } from 'react';
export const Mockups = () => {
  return <section id="mockups" className="py-20 bg-gradient-to-b from-white to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Experience AfterMatch
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how our app helps couples create deeper connections through
            thoughtful features.
          </p>
        </div>
        <div className="relative max-w-5xl mx-auto">
          {/* Decorative elements */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-pink-200 rounded-full opacity-20 blur-2xl"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-orange-200 rounded-full opacity-20 blur-2xl"></div>
          {/* Mockup screens */}
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0">
            <div className="md:-mr-6 md:transform md:-rotate-6 transition-transform hover:rotate-0 hover:scale-105 z-10">
              <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" alt="AfterMatch food preferences feature" className="rounded-3xl border-8 border-white shadow-xl max-w-[280px]" />
            </div>
            <div className="md:transform md:scale-110 transition-transform hover:scale-115 z-20">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" alt="AfterMatch main dashboard" className="rounded-3xl border-8 border-white shadow-xl max-w-[280px]" />
            </div>
            <div className="md:-ml-6 md:transform md:rotate-6 transition-transform hover:rotate-0 hover:scale-105 z-10">
              <img src="https://images.unsplash.com/photo-1511988617509-a57c8a288659?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" alt="AfterMatch memory journal feature" className="rounded-3xl border-8 border-white shadow-xl max-w-[280px]" />
            </div>
          </div>
          {/* Feature labels */}
          <div className="grid grid-cols-3 gap-4 mt-12 max-w-3xl mx-auto">
            <div className="text-center">
              <h4 className="font-medium text-gray-800">Food Preferences</h4>
              <p className="text-sm text-gray-600">
                Track favorite meals and restaurants
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-medium text-gray-800">
                Relationship Dashboard
              </h4>
              <p className="text-sm text-gray-600">
                All your important dates in one place
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-medium text-gray-800">Memory Journal</h4>
              <p className="text-sm text-gray-600">
                Capture and revisit special moments
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};