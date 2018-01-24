import React from 'react';
import ReactDOM from 'react-dom';

import { Output as ClearButton } from './ClearButton';

test('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<ClearButton />, div);

    ReactDOM.unmountComponentAtNode(div);
});