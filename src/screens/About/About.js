import React from 'react';
import waveImage from '../../assets/bitmojis/wave.png';
import './About.scss';


function AboutSection(props) {
    return (
        <div id={props.id || null} className='about'>
            <img src={waveImage} alt='Imagine my bitmoji waving at you here' className='wave-picture' />
            <p className='description'>
                I'm a fourth-year Computer Science and Business Administration student at 
                the University of Waterloo and Wilfrid Laurier University.
            </p>
        </div>
    );
}

export default AboutSection;
