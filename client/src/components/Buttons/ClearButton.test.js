import React from 'react';
import ReactDOM from 'react-dom';
import { compose } from 'recompose';

import { withMuiThemeProvider } from '../../providers';

import { Output as ClearButton } from './ClearButton';

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

    renderComponent(<ClearButton url='/' label='test' />, div);

    ReactDOM.unmountComponentAtNode(div);
});