import React, { Component } from 'react';
import { IntroScreen } from './screens';
import { Navbar } from './components';
import './App.scss';

// holds display order of each view and icons
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <IntroScreen id='home' />
      <IntroScreen id='about' />
      <IntroScreen id='exp' />
      <IntroScreen id='projects' />
    </div>
  );
}

export default App;
