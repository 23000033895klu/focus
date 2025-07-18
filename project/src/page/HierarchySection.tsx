const HierarchySection = () => (
  <div className="relative mb-20 animate-slide-up">
    <div className="absolute inset-0 bg-gradient-to-r from-navy-500/5 to-indigo-500/5 rounded-3xl blur-xl"></div>
    <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-12 md:p-16 border border-white/20">
      <h2 className="text-4xl font-bold bg-gradient-to-r from-navy-800 to-indigo-800 bg-clip-text text-transparent mb-12 text-center">
        Hierarchy Structure
      </h2>

      <div className="space-y-8">
        {/* HOD */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-navy-600 to-indigo-700 text-white px-8 py-4 rounded-xl shadow-lg font-semibold text-lg">
            CSE HOD
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-1 h-12 bg-gradient-to-b from-navy-600 to-indigo-600 rounded-full"></div>
        </div>

        {/* Deputy HOD */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-teal-600 to-cyan-700 text-white px-8 py-4 rounded-xl shadow-lg font-semibold text-lg">
            Deputy HoD Student Affairs
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-1 h-12 bg-gradient-to-b from-teal-600 to-gold-600 rounded-full"></div>
        </div>

        {/* FOCUS */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-gold-600 to-amber-700 text-white px-8 py-4 rounded-xl shadow-lg font-semibold text-lg">
            FOCUS Student Governance Body
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-1 h-12 bg-gradient-to-b from-gold-600 to-purple-600 rounded-full"></div>
        </div>

        {/* Roles */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {['Secretary', 'President', 'Treasurer', 'Leads'].map((role, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-purple-100 to-indigo-100 px-6 py-3 rounded-xl shadow-md font-medium text-navy-800"
            >
              {role}
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default HierarchySection;
