import React from 'react';
import Nav from './components/Nav';
import HeroSection from './components/HeroSection';
import Logos from './components/Logos';
import SubscriptionSection from './components/SubscriptionSection'
import MetricsSection from './components/MetricsSection';
import CardSection from './components/CardSection';
import PricingSection from './components/PricingSection'
import './global.css';

function App() {
  return <div className="App">
    <Nav />
    <HeroSection />
    <Logos />
    <SubscriptionSection />
    <MetricsSection />
    <CardSection />
    <PricingSection />
    </div>;
}

export default App;
