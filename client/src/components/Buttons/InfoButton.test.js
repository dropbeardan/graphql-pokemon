import React from 'react';
import ReactDOM from 'react-dom';

import { Output as InfoButton } from './InfoButton';

test('Renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<InfoButton />, div);

    ReactDOM.unmountComponentAtNode(div);
});