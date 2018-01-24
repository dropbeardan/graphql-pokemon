import React from 'react';
import ReactDOM from 'react-dom';

import { Output as AttackDetails } from './AttackDetails';

test('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<AttackDetails />, div);

    ReactDOM.unmountComponentAtNode(div);
});