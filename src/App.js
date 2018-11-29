import React, {Component} from 'react';
import './css/App.css';

import {Jumbotron, Button, Grid, Row, Col, ProgressBar} from 'react-bootstrap';

import {appContext} from './contextes';
import AppProvider from './providers/AppProvider';
import ProfileProvider from './providers/ProfileProvider';
import SkillsProvider from './providers/SkillsProvider';

import Profile from './components/Profile';
import Skills from './components/Skills';

export default class App extends Component {

    render() {
        return (
            <AppProvider>
                <appContext.Consumer>
                    {app => (
                        <div className={`App ${app.isLoading ? 'loading' : ''}`}>
                            <header className="App-header">
                                ReactJS - Context API - pattern
                            </header>
                            <Jumbotron>
                                <h1>Hello, world!</h1>
                                <p>
                                    This is a simple example how to use React Context API.
                                </p>
                                <div className="header-buttons">
                                    <Button href="https://github.com/flashz1/react-context-api-pattern" bsStyle="primary">Learn more</Button>
                                    <a className="github-button" href="https://github.com/flashz1/react-context-api-pattern/archive/master.zip" data-size="large" aria-label="Download flashz1/react-context-api-pattern on GitHub">Download</a>
                                    <a className="github-button" href="https://github.com/flashz1/react-context-api-pattern" data-size="large" data-show-count="true" aria-label="Star flashz1/react-context-api-pattern on GitHub">Star</a>
                                </div>
                            </Jumbotron>
                            <Grid>
                                {
                                    app.isLoading
                                        ?
                                            <Row>
                                                <ProgressBar active now={60} label={`${60}%`} />
                                            </Row>
                                        :
                                            null
                                }
                                <Row>
                                    <Col xs={6} md={4}>
                                        <ProfileProvider>
                                            <Profile />
                                        </ProfileProvider>
                                    </Col>
                                    <Col xs={6} md={8}>
                                        <SkillsProvider>
                                            <Skills toggleIsLoading={app.toggleIsLoading} />
                                        </SkillsProvider>
                                    </Col>
                                </Row>
                            </Grid>
                        </div>
                    )}
                </appContext.Consumer>
            </AppProvider>
        );
    }
}