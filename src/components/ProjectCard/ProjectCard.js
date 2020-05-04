import React from 'react';
import './ProjectCard.scss';

function ProjectCard(props) {
    return (
        <div className='project-card'>
            <img src={props.src} alt='Project screenshot' className='photo' />
        </div>
    );
}

export default ProjectCard;
