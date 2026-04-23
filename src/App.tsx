/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import ProfileSetup from './pages/ProfileSetup';
import Dashboard from './pages/Dashboard';

type View = 'landing' | 'login' | 'setup' | 'dashboard';

export default function App() {
  const [view, setView] = useState<View>('landing');

  const renderView = () => {
    switch (view) {
      case 'landing':
        return <LandingPage onStart={() => setView('login')} />;
      case 'login':
        return <LoginPage onLogin={() => setView('setup')} />;
      case 'setup':
        return <ProfileSetup onComplete={() => setView('dashboard')} />;
      case 'dashboard':
        return <Dashboard onLogout={() => setView('landing')} />;
      default:
        return <LandingPage onStart={() => setView('login')} />;
    }
  };

  return (
    <div className="antialiased font-sans selection:bg-blue-100 selection:text-blue-900">
      {renderView()}
    </div>
  );
}
