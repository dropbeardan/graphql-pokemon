import React from 'react';
import ReactDOM from 'react-dom';

import Home from './Home';
import { LinkButton } from '../Buttons';

jest.mock('../Buttons', () => {
  const mockComponent = () => { return <div className='mocked' />; };

  return {
    LinkButton: mockComponent
  };
});

test('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<Home />, div);
  ReactDOM.unmountComponentAtNode(div);
});
