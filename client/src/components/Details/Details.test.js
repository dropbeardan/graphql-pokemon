import React from 'react';
import ReactDOM from 'react-dom';

import { Output as Details } from './Details';

test('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<Details />, div);

    ReactDOM.unmountComponentAtNode(div);
});