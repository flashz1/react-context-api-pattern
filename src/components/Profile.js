import React, {Component, Fragment} from 'react';

import {profileContext} from '../contextes';

export default class Profile extends Component {

    static contextType = profileContext;

    render() {
        const {photo} = this.context;

        return (
            <Fragment>
                <figure>
                    <img src={photo} alt="Author"/>
                    <figcaption>Frontend Developer</figcaption>
                </figure>
            </Fragment>
        )
    }
}