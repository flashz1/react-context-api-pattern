import React, {Component} from 'react';

import {skillsContext} from '../contextes';

export default class SkillsProvider extends Component {

    state = {
        skills: [
            {
                id: 1,
                name: 'HTML',
                description: 'HTML is the standard markup language for creating Web pages.'
            },
            {
                id: 2,
                name: 'Javascript',
                description: 'JavaScript is a scripting or programming language that allows you to implement complex things on web pages.'
            },
            {
                id: 3,
                name: 'CSS',
                description: 'CSS is a language that describes the style of an HTML document.'
            }
        ]
    };

    render() {

        return (
            <skillsContext.Provider value={this.state}>
                {this.props.children}
            </skillsContext.Provider>
        )
    }


}