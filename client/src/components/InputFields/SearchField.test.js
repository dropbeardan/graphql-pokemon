import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { compose } from 'recompose';

import { withMuiThemeProvider } from '../../providers';

import SearchField from './SearchField';

const withProviders = compose(
    withMuiThemeProvider
);

const renderComponent = (component, target) => {
    ReactDOM.render(
        withProviders(
            component
        ),
        target
    );
};

test('renders without crashing', () => {
    const div = document.createElement('div');

    renderComponent(<SearchField id='mock' />, div);

    ReactDOM.unmountComponentAtNode(div);
});