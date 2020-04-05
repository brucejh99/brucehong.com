import React from 'react';
import './ContactSection.scss';
import EmailIcon from '../../assets/icons/email-round.svg';
import FacebookIcon from '../../assets/icons/fb-round.svg';
import LinkedinIcon from '../../assets/icons/linkedin-round.svg';
import GithubIcon from '../../assets/icons/github-round.svg';

// holds display order of each view and icons
function ContactSection() {
  return (
    <div className="contact-section">
      <a href='mailto:webmaster@example.com'>
        <img src={EmailIcon} alt='Email' className='icon' />
      </a>
      <a href='https://www.facebook.com/xev.amadore.5/' target='_blank'>
        <img src={FacebookIcon} alt='Facebook' className='icon' />
      </a>
      <a href='https://www.linkedin.com/in/brucejh99/' target='_blank'>
        <img src={LinkedinIcon} alt='Linkedin' className='icon' />
      </a>
      <a href='https://github.com/brucejh99' target='_blank'>
        <img src={GithubIcon} alt='Github' className='icon' />
      </a>
    </div>
  );
}

export default ContactSection;
