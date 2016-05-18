import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { fetchRemoteCards } from '../actions';

import DevTools from './DevTools';

export default class Root extends Component {
    componentDidMount() {
        this.props.store.dispatch(fetchRemoteCards());
    }

    render() {
        const { store } = this.props;

        return (
            <Provider store={store}>
                <div className="container">
                    <DevTools />
                </div>
            </Provider>
        );
    }
}
