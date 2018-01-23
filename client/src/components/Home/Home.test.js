import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { compose } from 'recompose';

import { withMuiThemeProvider } from '../../providers';

import Home from './Home';
import { RoundButton } from '../Buttons';

const withProviders = compose(
  withMuiThemeProvider
);

const renderComponent = (component, target) => {
  ReactDOM.render(
    withProviders(
      <BrowserRouter>
        <Route component={component} />
      </BrowserRouter>
    ),
    target
  );
};

jest.mock('../Buttons', () => {
  const mockComponent = () => { return <div className='mocked' />; };

  return {
    RoundButton: mockComponent
  };
});

test('renders without crashing', () => {
  const div = document.createElement('div');

  renderComponent(<Home />, div);
  ReactDOM.unmountComponentAtNode(div);
});
