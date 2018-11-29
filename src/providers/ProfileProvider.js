import React, {Component} from 'react';

import {profileContext} from '../contextes';

import photo from '../img/valerii.jpg';

export default class ProfileProvider extends Component {

    state = {
        firstName  : 'Valerii',
        lastName   : 'Cara',
        photo      : photo,
        linkedinUrl: 'https://www.linkedin.com/in/caravalerii/',
        githubUrl  : 'https://github.com/flashz1'
    };

    render() {

        return (
            <profileContext.Provider value={this.state}>
                {this.props.children}
            </profileContext.Provider>
        )
    }
}