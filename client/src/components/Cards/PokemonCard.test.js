import React from 'react';
import ReactDOM from 'react-dom';

import PokemonCard from './PokemonCard';

test('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<PokemonCard src='http://via.placeholder.com/250x300' id='1' name='Pikachu' />, div);

    ReactDOM.unmountComponentAtNode(div);
});