import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { compose } from 'recompose';

import { withMuiThemeProvider } from '../../providers';

const withProviders = compose(
    withMuiThemeProvider
);

import LinkButton from './LinkButton';

const renderComponent = (component, target) => {
    ReactDOM.render(
        withProviders(
            <BrowserRouter>
                <Route component={component} />
            </BrowserRouter>
        ), target
    );
};

test('renders without crashing', () => {
    const div = document.createElement('div');

    const LinkButtonContainer = () => {
        return <LinkButton url='/' label='test' />;
    };

    renderComponent(LinkButtonContainer, div);

    ReactDOM.unmountComponentAtNode(div);
});