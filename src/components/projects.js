import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 }

    }
    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid">
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{
                            justifyContent: 'center', color: 'black', height: '176px', background:
                                'url(https://st2.depositphotos.com/1051996/10100/v/950/depositphotos_101008342-stock-illustration-concept-eat-healthy-icon-conceptual.jpg) center / cover'
                        }}> NovoOficinas</CardTitle>
                        <CardText>
                            Frontend of a system of generator of Diets and manager of weight.
                        </CardText>
                        <CardActions style={{ textAlign: 'center' }} border>
                            <Button href="https://github.com/viteras007/NovoOficinas" target="_blank" colored>Github</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    <Card shadow={5} style={{ minWidth: '450', margin: '5em' }}>
                        <CardTitle style={{
                            justifyContent: 'center', color: 'black', height: '176px', background:
                                'url(https://robohash.org/static/img/top_logo.png) center / cover'
                        }}> RoboFriends</CardTitle>
                        <CardText>

                            Example made to show dynamic search, receive, and consumption of data from an API.
                            </CardText>
                        <CardActions style={{ textAlign: 'center' }} border>
                            <Button href="https://github.com/viteras007/robofriends" target="_blank" colored>Github</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle className="card-title" style={{
                            justifyContent: 'center', color: 'black', height: '176px', background:
                                'url(https://image.fnbr.co/price/icon_vip.png) center / cover'
                        }}> Fortinite-App</CardTitle>
                        <CardText>
                            Code used to perform status searches for Fortnite players using the API.
                            </CardText>
                        <CardActions style={{ textAlign: 'center' }} border>
                            <Button href="https://github.com/viteras007/Fortinite-App" target="_blank" colored>Github</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div className="projects-grid">
                    <Card shadow={5} style={{ minWidth: '450', margin: '5em' }}>
                        <CardTitle style={{
                            justifyContent: 'center', color: 'black', height: '176px', background:
                                'url(https://cdn.auth0.com/blog/angular/logo.png) center / cover'
                        }}> Angular Project #1</CardTitle>
                        <CardText>
                            Project still under construction
                        </CardText>
                        <CardActions style={{ textAlign: 'center' }} border>
                            <Button colored>Github</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                </div>
            )
        }
        else if (this.state.activeTab === 2) {
            return (
                <div className="projects-grid">
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{
                            justifyContent: 'center', color: 'black', height: '176px', background:
                                'url(https://st2.depositphotos.com/1051996/10100/v/950/depositphotos_101008342-stock-illustration-concept-eat-healthy-icon-conceptual.jpg) center / cover'
                        }}> Backend Oficinas</CardTitle>
                        <CardText>
                            Backend used in the project of Diet and weight control.
                        </CardText>
                        <CardActions style={{ textAlign: 'center' }} border>
                            <Button href="https://github.com/viteras007/BackendOficinas" target="_blank" colored>Github</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    <Card shadow={5} style={{ minWidth: '450', margin: '5em' }}>
                        <CardTitle style={{
                            justifyContent: 'center', color: 'black', height: '176px', background:
                                'url(https://cdn.iconscout.com/icon/premium/png-256-thumb/chat-1475-496821.png) center / cover'
                        }}> Chat App</CardTitle>
                        <CardText>
                            Example of Simple Chat using SocketIO, React and NodeJS!
                            </CardText>
                        <CardActions style={{ textAlign: 'center' }} border>
                            <Button href="https://github.com/viteras007/ChatApp" target="_blank" colored>Github</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        }
    }


    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>Angular</Tab>
                    <Tab>NodeJS</Tab>
                </Tabs>

                <section className="projects-grid">
                    <Grid >
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                </section>
            </div>
        );
    }
}

export default Projects;