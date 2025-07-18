import { Users, Award, Target, Calendar, Sparkles, Star, Zap } from 'lucide-react';

const wings = [
  { name: 'Academics & Skill Development', description: 'Empowers students to redefine academic norms through innovative pedagogy, evaluation, research, certification, and timetabling.', color: 'from-blue-500 to-indigo-600', icon: Target },
  { name: 'Alumni & IRP', description: 'Maintains alumni relations, contact information, and employment networks while actively identifying potential speakers for workshops, internships, and placement training.', color: 'from-green-500 to-emerald-600', icon: Users },
  { name: 'Events & Extension Activities', description: 'Organizes the cultural and departmental events conducted by the CSE Department.', color: 'from-purple-500 to-violet-600', icon: Calendar },
  { name: 'Provision', description: 'Ensures efficient financial management and provides necessary logistics and permissions for FOCUS-organized events within the department.', color: 'from-orange-500 to-red-600', icon: Award },
  { name: 'Resolvance', description: 'Collects student grievances via mail or Telegram and ensures prompt and effective resolution of issues.', color: 'from-red-500 to-pink-600', icon: Target },
  { name: 'Strategy', description: 'Coordinates and develops implementation approaches aligned with the department\'s goals.', color: 'from-indigo-500 to-purple-600', icon: Zap },
  { name: 'Tech and Society', description: 'Facilitates technology club events, global challenges, certifications, industry connections, and collaborations.', color: 'from-teal-500 to-cyan-600', icon: Star },
  { name: 'Voice', description: 'Promotes the events conducted by the department through marketing and outreach.', color: 'from-pink-500 to-rose-600', icon: Sparkles },
];

const WingsSection = () => (
  <div className="mb-20">
    <div className="text-center mb-16 animate-fade-in">
      <h2 className="text-4xl font-bold bg-gradient-to-r from-navy-800 to-indigo-800 bg-clip-text text-transparent mb-6">
        Our Wings
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-navy-600 to-indigo-600 mx-auto rounded-full"></div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {wings.map((wing, index) => (
        <div key={index} className="group animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
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
);

export default WingsSection;
