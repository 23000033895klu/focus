import { Star, Zap } from 'lucide-react';

const MainDescription = () => (
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
);

export default MainDescription;
