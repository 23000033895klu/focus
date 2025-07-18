import React from 'react';
import { Users, Award, Target, Calendar, Sparkles, Star, Zap, Crown } from 'lucide-react';

const AboutPage: React.FC = () => {
  const wings = [
    {
      name: 'Academics & Skill Development',
      description: 'Empowers students to redefine academic norms through innovative pedagogy, evaluation, research, certification, and timetabling.',
      color: 'from-blue-500 to-indigo-600',
      icon: Target
    },
    {
      name: 'Alumni & IRP',
      description: 'Maintains alumni relations, contact information, and employment networks while actively identifying potential speakers for workshops, internships, and placement training.',
      color: 'from-green-500 to-emerald-600',
      icon: Users
    },
    {
      name: 'Events & Extension Activities',
      description: 'Organizes the cultural and departmental events conducted by the CSE Department.',
      color: 'from-purple-500 to-violet-600',
      icon: Calendar
    },
    {
      name: 'Provision',
      description: 'Ensures efficient financial management and provides necessary logistics and permissions for FOCUS-organized events within the department.',
      color: 'from-orange-500 to-red-600',
      icon: Award
    },
    {
      name: 'Resolvance',
      description: 'Collects student grievances via mail or Telegram and ensures prompt and effective resolution of issues.',
      color: 'from-red-500 to-pink-600',
      icon: Target
    },
    {
      name: 'Strategy',
      description: 'Coordinates and develops implementation approaches aligned with the department\'s goals.',
      color: 'from-indigo-500 to-purple-600',
      icon: Zap
    },
    {
      name: 'Tech and Society',
      description: 'Facilitates technology club events, global challenges, certifications, industry connections, and collaborations.',
      color: 'from-teal-500 to-cyan-600',
      icon: Star
    },
    {
      name: 'Voice',
      description: 'Promotes the events conducted by the department through marketing and outreach.',
      color: 'from-pink-500 to-rose-600',
      icon: Sparkles
    }
  ];

  const heads = [
    { name: 'Dr. A Senthil', role: 'CSE-H1' },
    { name: 'Dr. T Pavan Kumar', role: 'CSE-H2' },
    { name: 'Dr. V S V Prabhakar', role: 'CSE-R' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="bg-gradient-to-r from-navy-600 to-indigo-700 p-4 rounded-2xl shadow-2xl">
                <Crown className="h-12 w-12 text-white" />
              </div>
              <Sparkles className="absolute -top-2 -right-2 h-6 w-6 text-gold-500 animate-pulse" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-navy-800 via-indigo-800 to-purple-800 bg-clip-text text-transparent mb-8 leading-tight">
            FOCUS: Empowering CSE Students for Excellence and Innovation
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-navy-600 via-indigo-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Main Description */}
        <div className="relative mb-20 animate-slide-up">
          <div className="absolute inset-0 bg-gradient-to-r from-navy-500/5 to-indigo-500/5 rounded-3xl blur-xl"></div>
          <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-12 md:p-16 border border-white/20">
            <div className="absolute top-6 left-6">
              <Star className="h-8 w-8 text-gold-500 animate-pulse" />
            </div>
            <div className="absolute bottom-6 right-6">
              <Zap className="h-6 w-6 text-indigo-500 animate-pulse" />
            </div>
            
            <div className="prose prose-xl max-w-none text-gray-700 leading-relaxed space-y-6">
              <p className="text-2xl font-light text-navy-800 mb-8">
                FOCUS serves as a student governance body for Computer Science and Engineering (CSE) students at the University. 
                Its primary objective is to provide a platform for students to voice their concerns and address them effectively.
              </p>
              
              <p className="text-lg">
                FOCUS is dedicated to offering opportunities in various academic domains, fostering individual and teamwork capabilities, 
                and promoting excellence in decision-making and perceptual skills among students.
              </p>
              
              <p className="text-lg">
                Having operated for 10 years, FOCUS has been particularly effective since 2013. The term "FOCUS" symbolizes futuristic 
                vision, sound decision-making, and students' keen perception abilities. The forum's purpose is to equip students with 
                the essential skills needed to thrive in a rapidly evolving, quality-conscious, and globalized technological landscape.
              </p>
              
              <p className="text-lg">
                FOCUS provides an ideal platform for students to share ideas, expand their knowledge, realize their potential, and gain 
                valuable experience. In today's technology-driven world, true leadership and knowledge are enriched through sharing.
              </p>
              
              <p className="text-lg">
                Additionally, FOCUS organizes National Level Techno Management Fests, providing students with a chance to explore new 
                technologies and insights during a 2 to 3-day break from their academic routines.
              </p>
            </div>
          </div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {[
            { icon: Target, number: "8", label: "Wings", gradient: "from-navy-500 to-indigo-600" },
            { icon: Award, number: "8", label: "Advisors", gradient: "from-teal-500 to-cyan-600" },
            { icon: Users, number: "8", label: "Directors", gradient: "from-gold-500 to-amber-600" },
            { icon: Calendar, number: "150", label: "Active Leads", gradient: "from-purple-500 to-pink-600" }
          ].map((metric, index) => (
            <div key={index} className="group animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 hover:border-white/40 transform hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className={`relative bg-gradient-to-r ${metric.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <metric.icon className="h-8 w-8 text-white" />
                </div>
                
                <div className="text-4xl font-bold text-navy-800 mb-2 group-hover:text-indigo-800 transition-colors">
                  {metric.number}
                </div>
                <div className="text-gray-600 font-medium group-hover:text-gray-700 transition-colors">
                  {metric.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Wings Section */}
        <div className="mb-20">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-navy-800 to-indigo-800 bg-clip-text text-transparent mb-6">
              Our Wings
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-navy-600 to-indigo-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {wings.map((wing, index) => (
              <div 
                key={index} 
                className="group animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 hover:border-white/40 transform hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className={`relative bg-gradient-to-r ${wing.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <wing.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-navy-800 mb-4 group-hover:text-indigo-800 transition-colors">
                    {wing.name}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {wing.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hierarchy */}
        <div className="relative mb-20 animate-slide-up">
          <div className="absolute inset-0 bg-gradient-to-r from-navy-500/5 to-indigo-500/5 rounded-3xl blur-xl"></div>
          <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-12 md:p-16 border border-white/20">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-navy-800 to-indigo-800 bg-clip-text text-transparent mb-12 text-center">
              Hierarchy Structure
            </h2>
            
            <div className="space-y-8">
              <div className="text-center">
                <div className="inline-block bg-gradient-to-r from-navy-600 to-indigo-700 text-white px-8 py-4 rounded-xl shadow-lg font-semibold text-lg">
                  CSE HOD
                </div>
              </div>
              
              <div className="flex justify-center">
                <div className="w-1 h-12 bg-gradient-to-b from-navy-600 to-indigo-600 rounded-full"></div>
              </div>
              
              <div className="text-center">
                <div className="inline-block bg-gradient-to-r from-teal-600 to-cyan-700 text-white px-8 py-4 rounded-xl shadow-lg font-semibold text-lg">
                  Deputy HoD Student Affairs
                </div>
              </div>
              
              <div className="flex justify-center">
                <div className="w-1 h-12 bg-gradient-to-b from-teal-600 to-gold-600 rounded-full"></div>
              </div>
              
              <div className="text-center">
                <div className="inline-block bg-gradient-to-r from-gold-600 to-amber-700 text-white px-8 py-4 rounded-xl shadow-lg font-semibold text-lg">
                  FOCUS Student Governance Body
                </div>
              </div>
              
              <div className="flex justify-center">
                <div className="w-1 h-12 bg-gradient-to-b from-gold-600 to-purple-600 rounded-full"></div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {['Secretary', 'President', 'Treasurer', 'Leads'].map((role, index) => (
                  <div key={index} className="bg-gradient-to-r from-purple-100 to-indigo-100 px-6 py-3 rounded-xl shadow-md font-medium text-navy-800">
                    {role}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Leadership */}
        <div className="relative animate-slide-up">
          <div className="absolute inset-0 bg-gradient-to-r from-navy-500/5 to-indigo-500/5 rounded-3xl blur-xl"></div>
          <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-12 md:p-16 border border-white/20">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-navy-800 to-indigo-800 bg-clip-text text-transparent mb-12 text-center">
              Leadership
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {heads.map((head, index) => (
                <div key={index} className="group text-center">
                  <div className="relative bg-gradient-to-br from-navy-50 to-indigo-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-navy-100 hover:border-navy-200 transform hover:-translate-y-1">
                    <div className="absolute top-4 right-4">
                      <Crown className="h-6 w-6 text-gold-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-navy-800 mb-2 group-hover:text-indigo-800 transition-colors">
                      {head.name}
                    </h3>
                    <p className="text-gray-600 font-medium group-hover:text-gray-700 transition-colors">
                      {head.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <div className="inline-block bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 shadow-lg border border-teal-100">
                <div className="flex justify-center mb-4">
                  <Star className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-2xl font-bold text-navy-800 mb-2">Dr. T Santhi Sri</h3>
                <p className="text-gray-600 font-medium">Deputy HoD Student Affairs, CSE Hons</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;