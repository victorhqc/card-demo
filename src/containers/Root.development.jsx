import React, { Component } from 'react';
import { Provider } from 'react-redux';

import DevTools from './DevTools';
import CardApp from './CardApp';

export default class Root extends Component {
    render() {
        const { store } = this.props;

        return (
            <Provider store={store}>
                <div className="container app">
                    <DevTools />
                    <CardApp />
                </div>
            </Provider>
        );
    }
}
