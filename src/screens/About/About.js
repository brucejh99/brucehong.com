import React from 'react';
import waterlooLogo from '../../assets/icons/waterloo.svg';
import './About.scss';

function AboutSection(props) {
    return (
        <div id={props.id || null} className='about'>
            <img src={waterlooLogo} alt='Cool Waterloo logo' className='waterloo-logo' />
            <p className='description'>
                I'm a fourth-year Computer Science and Business Administration student at 
                the University of Waterloo and Wilfrid Laurier University.
            </p>
        </div>
    );
}

export default AboutSection;
