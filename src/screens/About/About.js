import React from 'react';
import readingBitmoji from 'assets/bitmojis/student.png';
import waterlooLogo from 'assets/icons/waterloo.svg';
import laurierLogo from 'assets/icons/laurier.png';
import resume from 'assets/resume.pdf';
import './About.scss';

function AboutSection(props) {
    return (
        <div id={props.id || 'about'} className='about'>
            <img src={readingBitmoji} alt='My bitmoji is trying to read a book here' className='reading-bitmoji' />
            <img src={waterlooLogo} alt='UWaterloo logo' className='waterloo-logo' />
            <img src={laurierLogo} alt='Laurier logo' className='laurier-logo' />
            <p className='description'>
                I'm a fourth-year Computer Science and Business Administration student at 
                the University of Waterloo. I'm experienced in full-stack web development
                looking to build clean, impactful products.<br />
                <a href={resume} target='_blank' rel='noopener noreferrer'>
                    <button>Résumé</button>
                </a>
            </p>
        </div>
    );
}

export default AboutSection;
