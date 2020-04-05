import React from 'react';
import { IntroScreen } from './screens';
import { Navbar } from './components';
import './App.scss';

// holds display order of each view and icons
function App() {
  return (
    <div className="app">
      <Navbar />
      <IntroScreen />
      <IntroScreen />
    </div>
  );
}

export default App;
