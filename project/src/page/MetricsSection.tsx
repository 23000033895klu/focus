import { Award, Calendar, Target, Users } from 'lucide-react';

const MetricsSection = () => {
  const metrics = [
    { icon: Target, number: "8", label: "Wings", gradient: "from-navy-500 to-indigo-600" },
    { icon: Award, number: "8", label: "Advisors", gradient: "from-teal-500 to-cyan-600" },
    { icon: Users, number: "8", label: "Directors", gradient: "from-gold-500 to-amber-600" },
    { icon: Calendar, number: "150", label: "Active Leads", gradient: "from-purple-500 to-pink-600" }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
      {metrics.map((metric, index) => (
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
  );
};

export default MetricsSection;
