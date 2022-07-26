import React from 'react';
import AboutUsPage from './components/AboutUsPage';
import HeroPage from './components/HeroPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <HeroPage />
      <AboutUsPage />
    </div>
  );
}

export default App;
