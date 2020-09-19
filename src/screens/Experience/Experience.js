import React, { Component } from 'react';
import PixleeLogo from 'assets/company-logos/Pixlee.png';
import SMSLogo from 'assets/company-logos/SMS.png';
import FinastraLogo from 'assets/company-logos/Finastra.png';

import './Experience.scss';

const experienceObject = [
    {
        index: 0,
        companyName: "Pixlee",
        logo: PixleeLogo,
        title: "Software Engineering Intern",
        date: "Jan 2020 - May 2020",
        description: "Under construction pixlee"
    },
    {
        index: 1,
        companyName: "Secret Mission Software",
        logo: SMSLogo,
        title: "Software Developer",
        date: "Jan 2019 - Apr 2019",
        description: "Under construction sms"
    },
    {
        index: 2,
        companyName: "Finastra",
        logo: FinastraLogo,
        title: "Software Developer",
        date: "May 2018 - Aug 2018",
        description: "Under construction finastra"
    }
];


class ExperienceSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0
        }
    }

    render() {
        const { props, state } = this;
        const {
            companyName: activeCompany,
            title: activeTitle,
            date: activeDate,
            description: activeDescription
        } = experienceObject[state.activeIndex];
        console.log(experienceObject[state.activeIndex]);
        return (
            <div id={props.id || 'exp'} className='experience'>
                <div className='expLeft'>
                    <h1>Experience</h1>
                    <p>My past internships in software.</p>
                </div>
                <div className='expRight'>
                    <div className='expBar'>
                        {experienceObject.map(exp => (
                            <img
                                onMouseEnter={() => this.setState({ activeIndex: exp.index })}
                                src={exp.logo}
                                alt='Logo'
                                className='expItem'
                            />
                        ))}
                    </div>
                    <div className='expDescription'>
                        <h1>{activeCompany}</h1>
                        <h2>{`${activeTitle} | ${activeDate}`}</h2>
                    </div>
                </div>
            </div>
        );
    }
}

export default ExperienceSection;
