import React from 'react';
import { ProjectCard } from '../../components';
import inCitePhoto from 'assets/projects/inCite.png';
import './Projects.scss';

function ProjectSection(props) {
    return (
        <div id={props.id || 'projects'} className='projects'>
            <h1>
                Projects
            </h1>
            <ProjectCard src={inCitePhoto} />
            <ProjectCard src={inCitePhoto} />
            <ProjectCard src={inCitePhoto} />
            <ProjectCard src={inCitePhoto} />
        </div>
    );
}

export default ProjectSection;
