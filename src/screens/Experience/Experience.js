import React from 'react';
import PixleeLogo from 'assets/company-logos/Pixlee.png';
import SMSLogo from 'assets/company-logos/SMS.png';
import './Experience.scss';

const experienceObject = [
    {
        companyName: "Pixlee",
        logo: PixleeLogo,
        title: "Software Engineering Intern",
        description: [
            "Under construction"
        ]
    },
    {
        companyName: "Secret Mission Software",
        logo: SMSLogo,
        title: "Software Developer",
        description: [
            "Under construction"
        ]
    },
    {
        companyName: "Finastra",
        logo: SMSLogo,
        title: "Software Developer",
        description: [
            "Under construction (and wrong logo)"
        ]
    }
];


function ExperienceSection(props) {
    return (
        <div id={props.id || 'exp'} className='experience'>
            {experienceObject.map(exp => (
                <div className='section'>
                    <img src={exp.logo} alt='Company Logo' className='logo' />
                    <div className='description'>
                        <h2>{exp.companyName}</h2>
                        <h3>{exp.title}</h3>
                        {exp.description.map(point => <p>{`- ${point}`}</p>)}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ExperienceSection;
