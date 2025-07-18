import React from 'react';
import { Code, Cpu, Palette, Zap, Plane, Globe, Settings, Shield, Database, Users, Star, ArrowRight, Sparkles, Trophy } from 'lucide-react';

const ClubsPage: React.FC = () => {
  const clubs = [
    {
      name: 'Aprameya',
      description: 'Focused on advanced research and development in computer science applications.',
      icon: <Star className="h-6 w-6" />,
      color: 'from-purple-500 to-violet-600',
      members: '45+'
    },
    {
      name: 'Broad Band Networks',
      description: 'Specializing in network technologies and communication systems.',
      icon: <Globe className="h-6 w-6" />,
      color: 'from-blue-500 to-indigo-600',
      members: '38+'
    },
    {
      name: 'Design Circle',
      description: 'Creative hub for UI/UX design and digital art enthusiasts.',
      icon: <Palette className="h-6 w-6" />,
      color: 'from-pink-500 to-rose-600',
      members: '52+'
    },
    {
      name: 'Expedite',
      description: 'High-performance computing and optimization solutions.',
      icon: <Zap className="h-6 w-6" />,
      color: 'from-yellow-500 to-amber-600',
      members: '30+'
    },
    {
      name: 'Garuda (Drone Club)',
      description: 'Aerial robotics and drone technology development.',
      icon: <Plane className="h-6 w-6" />,
      color: 'from-green-500 to-emerald-600',
      members: '28+'
    },
    {
      name: 'Google Developer Groups (GDG)',
      description: 'Google technologies and development practices.',
      icon: <Code className="h-6 w-6" />,
      color: 'from-red-500 to-orange-600',
      members: '65+'
    },
    {
      name: 'Intel Innovation Club',
      description: 'Hardware innovation and Intel technology exploration.',
      icon: <Cpu className="h-6 w-6" />,
      color: 'from-indigo-500 to-purple-600',
      members: '35+'
    },
    {
      name: 'Kognitiv',
      description: 'Artificial intelligence and cognitive computing research.',
      icon: <Settings className="h-6 w-6" />,
      color: 'from-teal-500 to-cyan-600',
      members: '42+'
    },
    {
      name: 'Mayavi',
      description: 'Virtual reality and augmented reality development.',
      icon: <Globe className="h-6 w-6" />,
      color: 'from-orange-500 to-red-600',
      members: '33+'
    },
    {
      name: 'Megha',
      description: 'Cloud computing and distributed systems.',
      icon: <Database className="h-6 w-6" />,
      color: 'from-cyan-500 to-blue-600',
      members: '48+'
    },
    {
      name: 'Robotic Process Automation (RPA)',
      description: 'Automation solutions and process optimization.',
      icon: <Settings className="h-6 w-6" />,
      color: 'from-violet-500 to-purple-600',
      members: '40+'
    },
    {
      name: 'S.E.A Club',
      description: 'Software engineering and architecture principles.',
      icon: <Code className="h-6 w-6" />,
      color: 'from-emerald-500 to-teal-600',
      members: '55+'
    },
    {
      name: 'SOCC',
      description: 'Service-oriented and cloud computing solutions.',
      icon: <Globe className="h-6 w-6" />,
      color: 'from-sky-500 to-blue-600',
      members: '37+'
    },
    {
      name: 'SODS',
      description: 'Data science and analytics for modern applications.',
      icon: <Database className="h-6 w-6" />,
      color: 'from-rose-500 to-pink-600',
      members: '46+'
    },
    {
      name: 'Trailblazers (Salesforce)',
      description: 'Salesforce platform development and CRM solutions.',
      icon: <Users className="h-6 w-6" />,
      color: 'from-blue-600 to-indigo-700',
      members: '32+'
    },
    {
      name: 'White Hat Hackers',
      description: 'Cybersecurity and ethical hacking practices.',
      icon: <Shield className="h-6 w-6" />,
      color: 'from-gray-600 to-slate-700',
      members: '29+'
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
                <Code className="h-12 w-12 text-white" />
              </div>
              <Sparkles className="absolute -top-2 -right-2 h-6 w-6 text-gold-500 animate-pulse" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-navy-800 via-indigo-800 to-purple-800 bg-clip-text text-transparent mb-8">
            Technology Clubs
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our diverse technology clubs where innovation meets collaboration. Join a community of like-minded students passionate about technology.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-navy-600 via-indigo-600 to-purple-600 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            { icon: Users, number: "16", label: "Active Clubs", gradient: "from-navy-500 to-indigo-600" },
            { icon: Star, number: "650+", label: "Active Members", gradient: "from-teal-500 to-cyan-600" },
            { icon: Trophy, number: "50+", label: "Projects", gradient: "from-gold-500 to-amber-600" }
          ].map((stat, index) => (
            <div key={index} className="group animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 hover:border-white/40 transform hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className={`relative bg-gradient-to-r ${stat.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                
                <div className="text-4xl font-bold text-navy-800 mb-2 group-hover:text-indigo-800 transition-colors">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium group-hover:text-gray-700 transition-colors">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Clubs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {clubs.map((club, index) => (
            <div 
              key={index}
              className="group animate-slide-up cursor-pointer"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 hover:border-white/40 transform hover:-translate-y-2 overflow-hidden">
                {/* Color Bar */}
                <div className={`h-2 bg-gradient-to-r ${club.color}`}></div>
                
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className={`bg-gradient-to-r ${club.color} w-14 h-14 rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {club.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-navy-800 group-hover:text-indigo-800 transition-colors leading-tight">
                        {club.name}
                      </h3>
                      <p className="text-sm text-gray-500 font-medium">{club.members} members</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {club.description}
                  </p>
                  
                  <div className="flex items-center text-navy-600 group-hover:text-indigo-700 transition-colors">
                    <span className="font-medium">Learn More</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
                
                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="relative animate-fade-in">
          <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-indigo-900 to-purple-900 rounded-3xl">
            <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-gold-400/20 to-amber-400/20 rounded-full blur-3xl animate-float-delayed"></div>
          </div>
          
          <div className="relative z-10 p-12 md:p-16 text-center text-white rounded-3xl">
            <div className="flex justify-center mb-8">
              <div className="bg-gradient-to-r from-gold-500 to-amber-600 p-4 rounded-2xl shadow-2xl">
                <Users className="h-12 w-12 text-white" />
              </div>
            </div>
            
            <h2 className="text-4xl font-bold mb-6">Join a Club Today</h2>
            <p className="text-xl mb-8 text-blue-200 max-w-2xl mx-auto leading-relaxed">
              Ready to dive into technology and innovation? Find your passion and connect with fellow tech enthusiasts.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group bg-gradient-to-r from-gold-500 to-amber-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-gold-600 hover:to-amber-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-gold-500/25 relative overflow-hidden">
                <span className="relative z-10 flex items-center justify-center">
                  Explore Clubs
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
              
              <button className="group border-2 border-white/30 text-white px-10 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 backdrop-blur-sm transition-all duration-300 relative overflow-hidden">
                <span className="relative z-10">Contact Us</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClubsPage;