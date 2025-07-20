import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center p-[3cm] bg-[#E0E1DD]">
      <div
        className="relative bg-cover bg-center rounded-2xl shadow-2xl p-8 w-full max-w-8xl h-[500px] md:h-[700px] flex flex-col items-center justify-center text-center overflow-hidden"
        style={{ backgroundImage: "url('./images/KL-University.jpeg')" }}
      >
        <div className="absolute inset-0 bg-[#0D1B2A]/70 rounded-2xl"></div>
        <div className="relative z-10">
          <div className="flex justify-center mb-4">
            <div className="bg-[#B3AF8F] p-4 rounded-2xl shadow-xl">
              <Star className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Welcome To FOCUS</h1>
          <p className="text-lg md:text-xl mb-6 text-[#E0E1DD] leading-relaxed">
            FOCUS is a vibrant community that fosters innovation and excellence in the CSE Department.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-[#B3AF8F] text-[#0D1B2A] px-6 py-3 rounded-xl font-semibold hover:bg-[#a8a278] transform hover:scale-105 transition-all duration-300 shadow-xl">
              <span className="flex items-center justify-center">
                Get Started <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button className="group border-2 border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
