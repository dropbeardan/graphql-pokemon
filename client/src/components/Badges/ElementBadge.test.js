import React from 'react';
import ReactDOM from 'react-dom';

import ElementBadge from './ElementBadge';

test('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<ElementBadge />, div);

    ReactDOM.unmountComponentAtNode(div);
});