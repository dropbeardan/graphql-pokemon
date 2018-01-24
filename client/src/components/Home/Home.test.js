import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Output as Home } from './Home';

const renderComponent = (component, target) => {
	ReactDOM.render(
		<BrowserRouter>
			<Route component={() => { return component; }} />
		</BrowserRouter>,
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