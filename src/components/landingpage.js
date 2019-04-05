import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return (
            <div className="container" style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src="https://scontent.fuba1-1.fna.fbcdn.net/v/t1.0-9/21370838_1515464158569180_728611854248585782_n.jpg?_nc_cat=107&_nc_ht=scontent.fuba1-1.fna&oh=8ca73141b9ebdb32b65a6e91e270d245&oe=5D43AD1E"
                            alt="avatar"
                            className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1>FULL STACK WEB DEVELOPER</h1>
                            <hr />
                            <p>HTML/CSS3 | Boostrap | JavaScript | ReactJS | Angular 2+ | NodeJS | ExpressJS</p>
                            <div className="social-links">

                                {/* LINKEDIN */ }
                                <a href="https://www.linkedin.com/in/victor-hugo-6b8a1813a/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>

                                {/* GITHUB */ }
                                <a href="https://github.com/viteras007" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>


                                

                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Landing;