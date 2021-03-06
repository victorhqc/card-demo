require('roboto-fontface/css/roboto-fontface.css');
require('material-icons/css/material-icons.css');
require('bootstrap/dist/css/bootstrap.css');

require('./style.css');

import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import Root from './containers/Root';

const store = configureStore();

render(
    <Root store={store} />,
    document.getElementById('root')
);
