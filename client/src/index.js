import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { compose } from 'recompose';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { withApolloProvider, withJSSProvider, withMuiThemeProvider } from './providers';

import { Home, Pokedex } from './components';

const withProviders = compose(
    withApolloProvider,
    withJSSProvider,
    withMuiThemeProvider
);

ReactDOM.render(
    withProviders(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/pokedex' component={Pokedex} />
            </Switch>
        </BrowserRouter>
    ),
    document.getElementById('root')
);

registerServiceWorker();
