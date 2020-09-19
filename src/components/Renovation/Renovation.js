import React from 'react';
import resume from 'assets/resume.pdf';
import './Renovation.scss';

function Renovation() {
    return (
        <a href={resume} target='_blank' rel='noopener noreferrer'>
            <div className='renovation'>
                This site is currently being renovated. In the meantime, you can find my resume by clicking here!
            </div>
        </a>
    );
}

export default Renovation;
