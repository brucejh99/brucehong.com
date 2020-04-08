import React, { Component } from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import './Navbar.scss';

const NAVBAR_HEIGHT = 24;

// holds display order of each view and icons
class Navbar extends Component {
  state = {
    activePage: 1
  }

  componentDidMount() {
    this.setWindowDimensions();
    this.setActive();
    window.addEventListener('scroll', this.setActive.bind(this));
    window.addEventListener('resize', this.handleResize.bind(this));
  }

  handleResize() {
    this.setWindowDimensions();
    this.setActive();
  }

  setWindowDimensions() {
    this.homeOffset = document.getElementById('home').offsetTop - NAVBAR_HEIGHT;
    this.aboutOffset = document.getElementById('about').offsetTop - NAVBAR_HEIGHT;
    this.expOffset = document.getElementById('exp').offsetTop - NAVBAR_HEIGHT;
    this.projectsOffset = document.getElementById('projects').offsetTop - NAVBAR_HEIGHT;
    // polyfill for browsers that don't support smooth scroll natively
    smoothscroll.polyfill();
  }

  setActive() {
    const offset = window.pageYOffset;
    if(offset < this.aboutOffset) {
      this.setState({ activePage: 'home' });
    } else if(offset < this.expOffset) {
      this.setState({ activePage: 'about' });
    } else if(offset < this.projectsOffset) {
      this.setState({ activePage: 'exp' });
    } else {
      this.setState({ activePage: 'projects' });
    }
  }

  smoothScrollY = y => {
    window.scrollTo({
      top: y,
      left: 0,
      behavior: 'smooth'
    });
  }

  render() {
    const { activePage } = this.state;
    return (
      <div className="navbar">
        <button
          onClick={() => this.smoothScrollY(this.homeOffset)}
          className={activePage === 'home' ? 'active' : null}
        >
          Home
        </button>
        <button
          onClick={() => this.smoothScrollY(this.aboutOffset)}
          className={activePage === 'about' ? 'active' : null}
        >
          About
        </button>
        <button
          onClick={() => this.smoothScrollY(this.expOffset)}
          className={activePage === 'exp' ? 'active' : null}
        >
          Experience
        </button>
        <button
          onClick={() => this.smoothScrollY(this.projectsOffset)}
          className={activePage === 'projects' ? 'active' : null}
        >
          Projects
        </button>
      </div>
    );
  }
}

export default Navbar;
