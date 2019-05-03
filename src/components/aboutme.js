import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class About extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{ textAlign: 'center' }}>
                            <img
                                src="https://media.licdn.com/dms/image/C4D03AQHYbYYncSmLAA/profile-displayphoto-shrink_200_200/0?e=1559779200&v=beta&t=qHTx7G8hkOare3z65RYBmgKgVSkxvGRNTvmndv04bZY"
                                alt="avatar"
                                style={{ height: '200px', borderRadius: '10%' }}
                            />
                        </div>

                        <h2 style={{ paddingTop: '2em', fontSize:'30px' }}>Victor Hugo Ribeiro Martins</h2>
                        <h4 style={{ color: 'grey' }}>Programmer</h4>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <p>
                            Full stack developer with experience in React, NodeJS, ExpressJS, MySQL, HTML / CSS3, Angular 2+.</p>
                        <p>Experience in creating CRUD</p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />                        
                        <h5>Phone</h5>
                        <p>+55 (34) 98815-8368</p>
                        <h5>Email</h5>
                        <p>viteras10@gmail.com</p>
                        <h5>Web</h5>
                        <p>https://viteras007.github.io/curriculo/</p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education
                            startYear={2016}
                            endYear={2019}
                            schoolName="IFTM"
                            schoolDescription="Training in the Course of Analysis and Development of Systems, with a duration of 3 years focused on programming."
                        />
                        <Education
                            startYear={2017}
                            endYear={2017}
                            schoolName="Projeto RAE"
                            schoolDescription="
                            Project developed in college as a scientific initiation. It functions as a study site with statistics about your difficulties. It reached the first place in the SIN (event with several projects of all the Institutes)"
                        />
                        <hr style={{ borderTop: '3px solid #e22947' }} />
                        <h2>Experience</h2>
                        <Experience
                            startYear={2019}
                            endYear={2019}
                            jobName="SIGPharma - trainee"
                            jobDescription="Complete refurbishment of a system in flex and java for Angle 2+ and NodeJS."
                        />                        
                        <hr style={{ borderTop: '3px solid #e22947' }} />
                        <h2>Skills</h2>
                        <Skills
                            skill="Javascript"
                            progress={80}
                        />
                        <Skills
                            skill="HTML/CSS3"
                            progress={90}
                        />
                        <Skills
                            skill="NodeJS"
                            progress={70}
                        />
                        <Skills
                            skill="ExpressJS"
                            progress={50}
                        />
                        <Skills
                            skill="React"
                            progress={50}
                        />
                        <Skills
                            skill="Angular 2+"
                            progress={60}
                        />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default About;
