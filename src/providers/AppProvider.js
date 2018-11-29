import React, {Component} from 'react';

import {appContext} from '../contextes';

export default class AppProvider extends Component {

    state = {
        isLoading      : false,
        toggleIsLoading: () => this.toggleIsLoading()
    };

    render() {

        return (
            <appContext.Provider value={this.state}>
                {this.props.children}
            </appContext.Provider>
        )
    }

    toggleIsLoading = () => {
        this.setState({
            isLoading: !this.state.isLoading
        })
    }

}