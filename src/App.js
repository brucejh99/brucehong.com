import React from 'react';
import { IntroSection, AboutSection, ExperienceSection, ProjectSection } from 'screens';
import { Navbar, ContactSection, Renovation } from 'components';
import './App.scss';

// holds display order of each view and icons
const App = () => {
  return (
    <div className='app'>
      {/* <Navbar /> */}
      <Renovation />
      <ContactSection />

      <IntroSection />
      {/* <AboutSection />
      <ExperienceSection />
      <ProjectSection /> */}
    </div>
  );
}

export default App;
