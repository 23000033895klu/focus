import React from 'react';
import { ArrowRight, Target, Lightbulb, Users, Trophy, Sparkles, Star, Zap } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
{/* Hero Section */}
<section className="min-h-screen flex items-center justify-center p-[3cm] bg-gray-100">
  {/* Centered Content Box with background */}
  <div
    className="relative bg-cover bg-center bg-no-repeat rounded-2xl shadow-2xl p-8 w-full max-w-8xl h-[500px] md:h-[700px] flex flex-col items-center justify-center text-center overflow-hidden"
    style={{ backgroundImage: "url('./images/KL-University.jpeg')" }}
  >
    {/* Black overlay */}
    <div className="absolute inset-0 bg-black/50 rounded-2xl"></div>

    {/* Content */}
    <div className="relative z-10">
      <div className="flex justify-center mb-4">
        <div className="bg-gradient-to-r from-gold-500 to-amber-600 p-4 rounded-2xl shadow-xl">
          <Star className="h-12 w-12 text-white" />
        </div>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
        Welcome To FOCUS
      </h1>

      <p className="text-lg md:text-xl mb-6 text-gray-100 leading-relaxed">
        FOCUS is a vibrant community that fosters innovation and excellence in the CSE Department.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="group bg-gradient-to-r from-gold-500 to-amber-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-gold-600 hover:to-amber-700 transform hover:scale-105 transition-all duration-300 shadow-xl">
          <span className="flex items-center justify-center">
            Get Started
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </span>
        </button>

        <button className="group border-2 border-white/50 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/10 hover:border-white/70 transition-all duration-300">
          Learn More
        </button>
      </div>
    </div>
  </div>
</section>


      {/* Mission Section */}
      <section className="py-24 bg-gradient-to-br from-white via-blue-50/50 to-indigo-50/50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-navy-100/50 to-indigo-100/50 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-gold-100/50 to-amber-100/50 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-navy-800 to-indigo-800 bg-clip-text text-transparent mb-6">
              Our Mission
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-navy-600 via-indigo-600 to-purple-600 mx-auto mb-8 rounded-full"></div>
          </div>
          
          <div className="relative animate-slide-up">
            <div className="absolute inset-0 bg-gradient-to-r from-navy-500/5 to-indigo-500/5 rounded-3xl blur-xl"></div>
            <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-12 md:p-16 shadow-2xl border border-white/20">
              <div className="absolute top-6 left-6">
                <Zap className="h-8 w-8 text-gold-500 animate-pulse" />
              </div>
              <div className="absolute bottom-6 right-6">
                <Sparkles className="h-6 w-6 text-indigo-500 animate-pulse" />
              </div>
              
              <blockquote className="text-2xl md:text-3xl text-gray-700 leading-relaxed text-center italic font-light">
                "Our mission is to unlock the hidden talents of students while building a close-knit community, 
                fostering comprehensive personal growth, achieving academic excellence, enhancing communication 
                and teamwork skills, and encouraging innovation."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Our Plan Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-navy-800 to-indigo-800 bg-clip-text text-transparent mb-6">
              Our Plan
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-navy-600 via-indigo-600 to-purple-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic initiatives designed to empower every student in their journey towards excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: "Identify Talents",
                description: "Discover and nurture individual talents within our community",
                gradient: "from-navy-500 to-indigo-600",
                delay: "0ms"
              },
              {
                icon: Users,
                title: "Build Community",
                description: "Foster strong connections through events and collaborative activities",
                gradient: "from-teal-500 to-cyan-600",
                delay: "100ms"
              },
              {
                icon: Trophy,
                title: "Academic Excellence",
                description: "Achieve outstanding results with comprehensive support systems",
                gradient: "from-gold-500 to-amber-600",
                delay: "200ms"
              },
              {
                icon: Lightbulb,
                title: "Innovation Culture",
                description: "Cultivate creativity and innovative thinking in technology",
                gradient: "from-purple-500 to-pink-600",
                delay: "300ms"
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="group animate-slide-up"
                style={{ animationDelay: item.delay }}
              >
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 hover:border-white/40 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className={`relative bg-gradient-to-r ${item.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-navy-800 mb-4 group-hover:text-indigo-800 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {item.description}
                  </p>
                  
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="h-5 w-5 text-indigo-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-indigo-900 to-purple-900">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-gold-400/20 to-amber-400/20 rounded-full blur-3xl animate-float-delayed"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h2 className="text-5xl font-bold text-white mb-6">
              Join the FOCUS Community
            </h2>
            <p className="text-xl mb-12 text-blue-200 max-w-3xl mx-auto leading-relaxed">
              Be part of a community that values excellence, innovation, and personal growth in the field of Computer Science and Engineering.
            </p>
            
            <button className="group bg-gradient-to-r from-gold-500 to-amber-600 text-white px-12 py-4 rounded-xl font-semibold hover:from-gold-600 hover:to-amber-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-gold-500/25 relative overflow-hidden">
              <span className="relative z-10 flex items-center justify-center text-lg">
                Get Involved
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;