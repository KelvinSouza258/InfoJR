import React from 'react';
import Nav from './components/Nav';
import HeroSection from './components/HeroSection';
import Logos from './components/Logos';
import SubscriptionSection from './components/SubscriptionSection'
import './global.css';
import MetricsSection from './components/MetricsSection';

function App() {
  return <div className="App">
    <Nav />
    <HeroSection />
    <Logos />
    <SubscriptionSection />
    <MetricsSection />
    </div>;
}

export default App;
