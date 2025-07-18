import { Crown, Sparkles } from 'lucide-react';

const AboutTitle = () => (
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
);

export default AboutTitle;
