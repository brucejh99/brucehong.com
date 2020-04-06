import React from 'react';
import './Navbar.scss';

// holds display order of each view and icons
class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.setActive.bind(this));
    window.addEventListener('resize', this.setActive.bind(this));
    this.setActive();
  }

  setActive() {
    const { pageYOffset, innerHeight } = window;
    const activePage = Math.floor(pageYOffset / innerHeight) + 1;
    this.setState({ activePage }, () => console.log(this.state.activePage));
  }

  render() {
    const { activePage } = this.state;
    return (
      <div className="navbar">
        <a href='www.brucehong.com' className={activePage === 1 ? 'active' : null}>
          Home
        </a>
        <a href='www.brucehong.com' className={activePage === 2 ? 'active' : null}>
          About
        </a> 
        <a href='www.brucehong.com' className={activePage === 3 ? 'active' : null}>
          Experience
        </a>
        <a href='www.brucehong.com' className={activePage === 4 ? 'active' : null}>
          Projects
        </a>
      </div>
    );
  }
}

export default Navbar;
