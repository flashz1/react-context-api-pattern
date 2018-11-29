import React, {Component, Fragment} from 'react';

import {OverlayTrigger, Tooltip, Button} from 'react-bootstrap';

import {skillsContext} from '../contextes';

export default class Skills extends Component {

    static contextType = skillsContext;

    render() {
        const {skills}          = this.context;
        const {toggleIsLoading} = this.props;

        const tooltip = (
            <Tooltip id="tooltip">
                <strong>Method from main AppProvider.</strong> Check how it works.
            </Tooltip>
        );

        return (
            <Fragment>
                <ul>
                    {
                        skills.length
                            ?
                                skills.map(skill => {
                                    return <li key={skill.id}>{skill.name}</li>
                                })
                            :
                                null
                    }
                </ul>
                <OverlayTrigger placement="top" overlay={tooltip}>
                    <Button bsStyle="primary" onClick={toggleIsLoading}>Load More</Button>
                </OverlayTrigger>
            </Fragment>
        )
    }
}