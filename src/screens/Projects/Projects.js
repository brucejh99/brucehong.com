import React from 'react';
import { ProjectCard } from '../../components';
import './Projects.scss';

function ProjectSection(props) {
    return (
        <div id={props.id || 'projects'} className='projects'>
            <ProjectCard />
        </div>
    );
}

export default ProjectSection;
