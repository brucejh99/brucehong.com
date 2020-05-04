import React, { Component } from 'react';
import Typewriter from 'typewriter-effect';
import BreakingPaper1 from 'assets/bitmojis/breaking-paper-1.png';
import BreakingPaper2 from 'assets/bitmojis/breaking-paper-2.png';
import ProfilePicture from 'assets/bitmojis/surprise.png';
import './Intro.scss';


function IntroSection(props) {
  return (
    <div id={props.id || 'home'} className='intro'>
      <div className='half'>
        <div className='title-writer-wrapper'>
          <TitleWriter />
        </div>
      </div>
      <div className='half'>
        <AnimatedIntroPicture />
      </div>
    </div>
  );
}

function TitleWriter() {
  const preDescription = `I'm a `;
  const descriptions = ['student.', 'developer.', 'waterbottle designer.'];
  return (
    <Typewriter
      options={{
        delay: 75,
        deleteSpeed: 30,
        wrapperClassName: 'title-writer',
        cursorClassName: 'Typewriter__cursor title-writer',
      }}
      onInit={typewriter => {
        typewriter
          .pauseFor(3500)
          .typeString('<strong>Hey,<strong>')
          .pauseFor(250)
          .typeString(`<strong> my name is Bruce.<strong>`)
          .pauseFor(250)
          .typeString('<br>')
          .pauseFor(400)
          .typeString(preDescription)

          .typeString(descriptions[0])
          .pauseFor(500)
          .deleteChars(descriptions[0].length)
          .pauseFor(250)

          .typeString(descriptions[1])
          .pauseFor(500)
          .deleteChars(descriptions[1].length)
          .pauseFor(250)
          
          .typeString(descriptions[2])
          .pauseFor(500)
          .deleteChars(preDescription.length + descriptions[2].length)
          .pauseFor(500)

          .typeString(`Let's get in touch!`)
          .start();
      }}
    />
  );
}

class AnimatedIntroPicture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      picture: null
    }
  }

  componentDidMount() {
    this.breakPaper();
  }

  breakPaper() {
    const showProfilePicture = () => {
      setTimeout(() => {
        this.setState({ picture: ProfilePicture });
      }, 1000);
    }
    const showPaper2 = () => {
      setTimeout(() => {
        this.setState({ picture: BreakingPaper2 }, showProfilePicture);
      }, 1000);
    }
    setTimeout(() => {
      this.setState({ picture: BreakingPaper1 }, showPaper2);
    }, 1000);
  }

  render() {
    return (
      this.state.picture ? <img src={this.state.picture} alt='My bitmoji was supposed to pop out here' className='profile-picture' /> : null
    );
  }
}

export default IntroSection;
