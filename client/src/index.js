import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { compose } from 'recompose';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { withMuiThemeProvider } from './providers';

import { App } from './components';

const withProviders = compose(
    withMuiThemeProvider
);

ReactDOM.render(
    withProviders(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={App} />
            </Switch>
        </BrowserRouter>
    ),
    document.getElementById('root')
);

registerServiceWorker();