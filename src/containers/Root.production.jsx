import React, { Component } from 'react';
import { Provider } from 'react-redux';
import CardApp from './CardApp';

export default class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
          <CardApp />
      </Provider>
    );
  }
}
