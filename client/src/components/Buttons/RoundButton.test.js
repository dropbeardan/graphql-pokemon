import React from 'react';
import ReactDOM from 'react-dom';

test('renders without crashing', () => {
    const div = document.createElement('div');

    const RoundButtonContainer = () => {
        return <RoundButton url='/' label='test' />;
    };

    renderComponent(RoundButtonContainer, div);

    ReactDOM.unmountComponentAtNode(div);
});