import React from 'react';
import { fetchRemoteCards } from '../actions';
import CardListComponent from '../components/CardListComponent';

export default class CardApp extends React.Component {
    componentDidMount() {
        const { store } = this.context;
        this.unsuscribe = store.subscribe(() => {
            this.forceUpdate()
        })

        store.dispatch(fetchRemoteCards());
    }

    componentWillUnMount() {
        this.unsuscribe();
    }

    render() {
        const { store } = this.context;
        const state = store.getState();

        return (
            <CardListComponent
                cards={state.cards}
            />
        )
    }
}

CardApp.contextTypes = {
    store: React.PropTypes.object
};
