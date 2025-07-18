import React from 'react';
import { Calendar, MapPin, Users, Clock, Sparkles, Star, Trophy } from 'lucide-react';

const EventsPage: React.FC = () => {
  const eventsByYear = [
    {
      year: '2024–2025',
      events: [
        {
          name: 'Committee Meeting',
          date: 'March 15, 2025',
          location: 'CSE Department',
          attendees: '50+',
          description: 'Monthly committee meeting to discuss upcoming initiatives and student feedback.',
          status: 'upcoming'
        }
      ]
    },
    {
      year: '2023–2024',
      events: [
        {
          name: 'Cloud Computing Workshop',
          date: 'February 10, 2024',
          location: 'Lab 301',
          attendees: '80+',
          description: 'Hands-on workshop on AWS cloud services and deployment strategies.',
          status: 'completed'
        },
        {
          name: 'Aptitude Training Session',
          date: 'January 20, 2024',
          location: 'Auditorium',
          attendees: '150+',
          description: 'Comprehensive aptitude training for placement preparation.',
          status: 'completed'
        },
        {
          name: 'Design Thinking Workshop',
          date: 'December 15, 2023',
          location: 'Innovation Lab',
          attendees: '60+',
          description: 'Interactive workshop on design thinking methodology and problem-solving.',
          status: 'completed'
        }
      ]
    },
    {
      year: '2022–2023',
      events: [
        {
          name: 'Resume Hacks',
          date: 'November 25, 2022',
          location: 'Seminar Hall',
          attendees: '120+',
          description: 'Expert guidance on crafting effective resumes for tech industry roles.',
          status: 'completed'
        },
        {
          name: 'UI/UX Workshop',
          date: 'October 18, 2022',
          location: 'Design Studio',
          attendees: '70+',
          description: 'Comprehensive workshop on user interface and experience design principles.',
          status: 'completed'
        },
        {
          name: 'Blockchain & Cloud Computing',
          date: 'September 30, 2022',
          location: 'Tech Hub',
          attendees: '100+',
          description: 'Technical session on blockchain technology and cloud computing integration.',
          status: 'completed'
        }
      ]
    },
    {
      year: '2021–2022',
      events: [
        {
          name: 'Panel Discussion on Future Tech',
          date: 'March 22, 2022',
          location: 'Virtual',
          attendees: '200+',
          description: 'Industry experts discuss emerging technologies and career opportunities.',
          status: 'completed'
        },
        {
          name: 'Cultural Festival',
          date: 'February 14, 2022',
          location: 'Campus Grounds',
          attendees: '500+',
          description: 'Annual cultural celebration with tech-themed competitions and performances.',
          status: 'completed'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="bg-gradient-to-r from-navy-600 to-indigo-700 p-4 rounded-2xl shadow-2xl">
                <Calendar className="h-12 w-12 text-white" />
              </div>
              <Sparkles className="absolute -top-2 -right-2 h-6 w-6 text-gold-500 animate-pulse" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-navy-800 via-indigo-800 to-purple-800 bg-clip-text text-transparent mb-8">
            Our Events
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the journey of innovation and learning through our organized events across the years.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-navy-600 via-indigo-600 to-purple-600 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Events Timeline */}
        <div className="space-y-20">
          {eventsByYear.map((yearData, yearIndex) => (
            <div key={yearIndex} className="relative animate-slide-up" style={{ animationDelay: `${yearIndex * 200}ms` }}>
              {/* Year Header */}
              <div className="flex items-center mb-12">
                <div className="relative">
                  <div className="bg-gradient-to-r from-navy-600 to-indigo-700 text-white px-8 py-4 rounded-xl shadow-xl">
                    <h2 className="text-3xl font-bold flex items-center">
                      <Trophy className="mr-3 h-8 w-8" />
                      {yearData.year}
                    </h2>
                  </div>
                  <div className="absolute -top-2 -right-2">
                    <Star className="h-6 w-6 text-gold-500 animate-pulse" />
                  </div>
                </div>
                <div className="flex-1 h-1 bg-gradient-to-r from-navy-600 via-indigo-600 to-purple-600 ml-8 rounded-full"></div>
              </div>

              {/* Events Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {yearData.events.map((event, eventIndex) => (
                  <div 
                    key={eventIndex}
                    className="group animate-slide-up"
                    style={{ animationDelay: `${(yearIndex * 200) + (eventIndex * 100)}ms` }}
                  >
                    <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 hover:border-white/40 transform hover:-translate-y-2 overflow-hidden">
                      {/* Status Indicator */}
                      <div className={`h-1 ${event.status === 'upcoming' ? 'bg-gradient-to-r from-green-500 to-emerald-600' : 'bg-gradient-to-r from-navy-500 to-indigo-600'}`}></div>
                      
                      <div className="p-8">
                        <div className="flex items-start justify-between mb-4">
                          <h3 className="text-2xl font-bold text-navy-800 group-hover:text-indigo-800 transition-colors leading-tight">
                            {event.name}
                          </h3>
                          {event.status === 'upcoming' && (
                            <div className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">
                              Upcoming
                            </div>
                          )}
                        </div>
                        
                        <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors">
                          {event.description}
                        </p>
                        
                        <div className="space-y-3">
                          <div className="flex items-center text-gray-500 group-hover:text-gray-600 transition-colors">
                            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 w-8 h-8 rounded-lg flex items-center justify-center mr-3">
                              <Calendar className="h-4 w-4 text-white" />
                            </div>
                            <span className="font-medium">{event.date}</span>
                          </div>
                          
                          <div className="flex items-center text-gray-500 group-hover:text-gray-600 transition-colors">
                            <div className="bg-gradient-to-r from-teal-500 to-cyan-600 w-8 h-8 rounded-lg flex items-center justify-center mr-3">
                              <MapPin className="h-4 w-4 text-white" />
                            </div>
                            <span className="font-medium">{event.location}</span>
                          </div>
                          
                          <div className="flex items-center text-gray-500 group-hover:text-gray-600 transition-colors">
                            <div className="bg-gradient-to-r from-purple-500 to-pink-600 w-8 h-8 rounded-lg flex items-center justify-center mr-3">
                              <Users className="h-4 w-4 text-white" />
                            </div>
                            <span className="font-medium">{event.attendees} attendees</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Hover Effect Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-24 relative animate-fade-in">
          <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-indigo-900 to-purple-900 rounded-3xl">
            <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-gold-400/20 to-amber-400/20 rounded-full blur-3xl animate-float-delayed"></div>
          </div>
          
          <div className="relative z-10 p-12 md:p-16 text-center text-white rounded-3xl">
            <div className="flex justify-center mb-8">
              <div className="bg-gradient-to-r from-gold-500 to-amber-600 p-4 rounded-2xl shadow-2xl">
                <Clock className="h-12 w-12 text-white" />
              </div>
            </div>
            
            <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
            <p className="text-xl mb-8 text-blue-200 max-w-2xl mx-auto leading-relaxed">
              Don't miss out on our upcoming events and workshops. Join our community to stay informed!
            </p>
            
            <button className="group bg-gradient-to-r from-gold-500 to-amber-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-gold-600 hover:to-amber-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-gold-500/25 relative overflow-hidden">
              <span className="relative z-10 flex items-center justify-center text-lg">
                Join Our Community
                <Sparkles className="ml-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;