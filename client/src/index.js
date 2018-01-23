import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { compose } from 'recompose';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { withJSSProvider, withMuiThemeProvider } from './providers';

import { Home } from './components';

const withProviders = compose(
    withJSSProvider,
    withMuiThemeProvider
);

ReactDOM.render(
    withProviders(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
            </Switch>
        </BrowserRouter>
    ),
    document.getElementById('root')
);

registerServiceWorker();
