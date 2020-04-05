import React from 'react';
import './intro.scss';

import Typewriter from 'typewriter-effect';

function IntroScreen() {
  return (
    <div className="intro">
      <div className="left">
        <TitleWriter />
      </div>
      <div className="right">
      </div>
    </div>
  );
}

function TitleWriter() {
  const preDescription = `I'm a `;
  const descriptions = ['developer.', 'student.', 'sports enthusiast.'];
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
          .typeString('<strong>Hey,<strong>')
          .pauseFor(250)
          .typeString('<strong> my name is Bruce.<strong>')
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

          .typeString('Welcome to my site!')
          .start();
      }}
    />
  );
}

export default IntroScreen;
