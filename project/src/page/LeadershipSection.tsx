import { Crown, Star } from 'lucide-react';

const heads = [
  { name: 'Dr. A Senthil', role: 'CSE-H1' },
  { name: 'Dr. T Pavan Kumar', role: 'CSE-H2' },
  { name: 'Dr. V S V Prabhakar', role: 'CSE-R' }
];

const LeadershipSection = () => (
  <div className="relative animate-slide-up">
    <div className="absolute inset-0 bg-gradient-to-r from-navy-500/5 to-indigo-500/5 rounded-3xl blur-xl"></div>
    <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-12 md:p-16 border border-white/20">
      <h2 className="text-4xl font-bold bg-gradient-to-r from-navy-800 to-indigo-800 bg-clip-text text-transparent mb-12 text-center">
        Leadership
      </h2>

      {/* Heads */}
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

      {/* Deputy HoD */}
      <div className="text-center">
        <div className="inline-block bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 shadow-lg border border-teal-100">
          <div className="flex justify-center mb-4">
            <Star className="h-8 w-8 text-teal-600" />
          </div>
          <h3 className="text-2xl font-bold text-navy-800 mb-2">Dr. T Santhi Sri</h3>
          <p className="text-gray-600 font-medium">
            Deputy HoD Student Affairs, CSE Hons
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default LeadershipSection;
