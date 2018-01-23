import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { compose } from 'recompose';

import { withMuiThemeProvider } from '../../providers';

import RoundButton from './RoundButton';

const withProviders = compose(
    withMuiThemeProvider
);

const renderComponent = (component, target) => {
    ReactDOM.render(
        withProviders(
            Component
        ),
        target
    );
};

test('renders without crashing', () => {
    const div = document.createElement('div');

    renderComponent(<RoundButton url='/' label='test' />, div);

    ReactDOM.unmountComponentAtNode(div);
});