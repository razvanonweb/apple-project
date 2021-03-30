import React from 'react';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import OfferDevices from '../components/OfferDevices/OfferDevices';
import '../css/App.min.css';

function App() {
  return (
    <div className="container-fluid p-0">
      <Header />
      <Hero />
      <OfferDevices />
    </div>
  );
}

export default App;
