import React from 'react';
import { IntroSection, AboutSection } from './screens';
import { Navbar } from './components';
import './App.scss';

// holds display order of each view and icons
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <IntroSection id='home' />
      <AboutSection id='about' />
      <IntroSection id='exp' />
      <IntroSection id='projects' />
    </div>
  );
}

export default App;
