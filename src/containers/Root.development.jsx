import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { fetchCards } from '../actions';

import DevTools from './DevTools';

export default class Root extends Component {
    componentDidMount() {
        this.props.store.dispatch(fetchCards([
            {
                id: 1,
                text: 'First card'
            },
            {
                id: 1,
                text: 'First card'
            }
        ]));
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
