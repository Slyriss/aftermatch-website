import React, { memo } from 'react';
import { HeartIcon, UtensilsIcon, CalendarIcon, BookIcon } from 'lucide-react';
export const Features = () => {
  const features = [{
    icon: <HeartIcon className="w-8 h-8 text-pink-500" />,
    title: 'Emotional Memory Building',
    description: 'Create a digital scrapbook of your relationship milestones, inside jokes, and special moments to strengthen your emotional connection.'
  }, {
    icon: <UtensilsIcon className="w-8 h-8 text-pink-500" />,
    title: 'Food Habit Tracker',
    description: "Never forget your partner's favorite restaurants, dishes they love, allergies, or dietary preferences again."
  }, {
    icon: <CalendarIcon className="w-8 h-8 text-pink-500" />,
    title: 'Date Reminder',
    description: 'Get notified about birthdays, anniversaries, and other special occasions with thoughtful gift and activity suggestions.'
  }, {
    icon: <BookIcon className="w-8 h-8 text-pink-500" />,
    title: 'Relationship Journal',
    description: 'Document your journey together with photos, notes, and memories that you can look back on as your relationship grows.'
  }];
  return <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Build Lasting Connections
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            AfterMatch provides the tools you need to nurture your relationship
            beyond the dating app.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => <div key={index} className="bg-pink-50 rounded-xl p-8 transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mb-6 shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
};