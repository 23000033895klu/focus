import React from 'react';

import AboutTitle from '../page/AboutTitle';
import MainDescription from '../page/MainDescription';
import MetricsSection from '../page/MetricsSection';
import WingsSection from '../page/WingsSection';
import HierarchySection from '../page/HierarchySection';
import LeadershipSection from '../page/LeadershipSection';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AboutTitle />
        <MainDescription />
        <MetricsSection />
        <WingsSection />
        <HierarchySection />
        <LeadershipSection />
      </div>
    </div>
  );
};

export default AboutPage;
