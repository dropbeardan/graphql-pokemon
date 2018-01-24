import React from 'react';
import ReactDOM from 'react-dom';

import { Output as InfoDetails } from './InfoDetails';

test('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<InfoDetails />, div);

    ReactDOM.unmountComponentAtNode(div);
});