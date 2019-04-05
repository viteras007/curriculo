import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Victor Hugo</h2>
                        <img
                            src="https://scontent.fuba1-1.fna.fbcdn.net/v/t1.0-9/36423294_1820525594729700_7667887280568139776_n.jpg?_nc_cat=105&_nc_ht=scontent.fuba1-1.fna&oh=4176a5ffcdb940ca48ee3e5af4d3b27d&oe=5D5045F8"
                            alt="avatar"
                            style={{ height: '250px', borderRadius: '35%' }}
                        />
                        <p style={{ fontFamily: 'Titillium Web', width: '75%', margin: 'auto', paddingTop: '1em', fontSize: '1.3em' }}>Passionate about new technologies and willing to make a difference!</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr />
                        <div className="contact-list">
                            <List className="list">
                                <ListItem >
                                    <ListItemContent className="listcont" style={{ fontSize: '1.5em', fontFamily: 'Anton' }}>
                                        <i className="fa fa-phone-square" aria-hidden="true" />
                                        +55 (34) 98815-8368
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '1.5em', fontFamily: 'Anton' }}>
                                        <i className="fa fa-github" aria-hidden="true" />
                                        viteras007
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent className="cquery" style={{fontSize: '1.5em', fontFamily: 'Anton' }}>
                                        <i className="fa fa-envelope" aria-hidden="true"/>
                                        
                                        viteras10@gmail.com
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '1.5em', fontFamily: 'Anton' }}>
                                        <i className="fa fa-linkedin" aria-hidden="true" />
                                        victor-hugomartins
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Contact;