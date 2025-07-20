import { Users, Award, Target, Calendar, Sparkles, Star, Zap } from 'lucide-react';

const wings = [
  {
    name: 'Academics & Skill Development',
    description:
      'Empowers students to redefine academic norms through innovative pedagogy, evaluation, research, certification, and timetabling.',
    color: 'from-[#415A77] to-[#1B263B]',
    icon: Target,
  },
  {
    name: 'Alumni & IRP',
    description:
      'Maintains alumni relations, contact information, and employment networks while actively identifying potential speakers for workshops, internships, and placement training.',
    color: 'from-[#B3AF8F] to-[#415A77]',
    icon: Users,
  },
  {
    name: 'Events & Extension Activities',
    description:
      'Organizes the cultural and departmental events conducted by the CSE Department.',
    color: 'from-[#1B263B] to-[#0D1B2A]',
    icon: Calendar,
  },
  {
    name: 'Provision',
    description:
      'Ensures efficient financial management and provides necessary logistics and permissions for FOCUS-organized events within the department.',
    color: 'from-[#B3AF8F] to-[#0D1B2A]',
    icon: Award,
  },
  {
    name: 'Resolvance',
    description:
      'Collects student grievances via mail or Telegram and ensures prompt and effective resolution of issues.',
    color: 'from-[#0D1B2A] to-[#415A77]',
    icon: Target,
  },
  {
    name: 'Strategy',
    description:
      'Coordinates and develops implementation approaches aligned with the department\'s goals.',
    color: 'from-[#1B263B] to-[#415A77]',
    icon: Zap,
  },
  {
    name: 'Tech and Society',
    description:
      'Facilitates technology club events, global challenges, certifications, industry connections, and collaborations.',
    color: 'from-[#0D1B2A] to-[#1B263B]',
    icon: Star,
  },
  {
    name: 'Voice',
    description:
      'Promotes the events conducted by the department through marketing and outreach.',
    color: 'from-[#415A77] to-[#B3AF8F]',
    icon: Sparkles,
  },
];

const WingsSection = () => (
  <div className="mb-20 px-4 md:px-20 animate-slide-up">
    {/* Heading */}
    <div className="text-center mb-16 animate-fade-in">
      <h2 className="text-4xl font-bold bg-gradient-to-r from-[#0D1B2A] to-[#415A77] bg-clip-text text-transparent mb-4">
        Our Wings
      </h2>
      <div className="w-24 h-1 bg-[#B3AF8F] mx-auto rounded-full" />
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {wings.map((wing, index) => (
        <div key={index} className="group animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
          <div className="relative bg-[#F4F4F2] rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-[#B3AF8F]/30 hover:border-[#415A77]/50 transform hover:-translate-y-1 backdrop-blur-sm">
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#E0E1DD]/30 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Icon */}
            <div className={`relative bg-gradient-to-r ${wing.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
              <wing.icon className="h-8 w-8 text-white" />
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-[#0D1B2A] mb-4 group-hover:text-[#B3AF8F] transition-colors">
              {wing.name}
            </h3>

            {/* Description */}
            <p className="text-[#1B263B] leading-relaxed group-hover:text-[#415A77] transition-colors">
              {wing.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default WingsSection;
