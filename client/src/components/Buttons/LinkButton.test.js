import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LinkButton from './LinkButton';

test('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(
        <BrowserRouter>
            <Route component={<LinkButton url='/' label='test' />} />
        </BrowserRouter>
        , div
    );

    ReactDOM.unmountComponentAtNode(div);
});