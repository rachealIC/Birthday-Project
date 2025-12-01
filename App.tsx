import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import IntroSequence from './components/IntroSequence';
import GalaxyDashboard from './components/GalaxyDashboard';

type Phase = 'intro' | 'galaxy';

const App: React.FC = () => {
  const [phase, setPhase] = useState<Phase>('intro');

  return (
    <div className="w-full h-screen bg-black text-white overflow-hidden">
      <AnimatePresence mode="wait">
        {phase === 'intro' && (
          <IntroSequence key="intro" onComplete={() => setPhase('galaxy')} />
        )}
        {phase === 'galaxy' && (
          <GalaxyDashboard key="galaxy" />
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
