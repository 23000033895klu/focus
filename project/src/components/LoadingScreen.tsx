import React from 'react';
import { GraduationCap } from 'lucide-react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-900 via-navy-800 to-indigo-900 flex items-center justify-center">
      <div className="text-center">
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-gold-400 to-amber-400 rounded-full animate-ping opacity-75"></div>
          <div className="relative bg-gradient-to-r from-gold-500 to-amber-500 p-6 rounded-full">
            <GraduationCap className="h-12 w-12 text-white animate-pulse" />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 animate-fade-in">FOCUS</h1>
        <p className="text-xl text-blue-200 mb-8 animate-fade-in-delay">CSE Student Governance Body</p>
        <div className="flex justify-center">
          <div className="w-16 h-1 bg-gradient-to-r from-gold-400 to-amber-400 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;