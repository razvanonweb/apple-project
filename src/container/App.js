import React from 'react';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import '../css/App.min.css';

function App() {
  return (
    <div className="container-fluid p-0">
      <Header />
      <Hero />
    </div>
  );
}

export default App;
