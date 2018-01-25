import React from 'react';
import { shallow } from 'enzyme';

import { Base as Pokedex } from './Pokedex';

const component = shallow(<Pokedex classes={{}} />);
const testFilter = (pokemons, searchValue) => {
    return expect(component.instance().filterByName(pokemons, searchValue));
};

test('An empty pokemon list should return an empty list.', () => {
    let searchValue = 'Pikachu';
    let pokemons = [];
    let output = [];

    testFilter(pokemons, searchValue).toEqual(output);
});

test('Empty search value should return the same pokemon list.', () => {
    let searchValue = '';
    let pokemons = [
        {
            "id": "UG9rZW1vbjowMDE=",
            "number": "001",
            "name": "Bulbasaur",
            "types": [
                "Grass",
                "Poison"
            ]
        },
        {
            "id": "UG9rZW1vbjowMDI=",
            "number": "002",
            "name": "Ivysaur",
            "types": [
                "Grass",
                "Poison"
            ]
        },
        {
            "id": "UG9rZW1vbjowMDM=",
            "number": "003",
            "name": "Venusaur",
            "types": [
                "Grass",
                "Poison"
            ]
        }
    ];

    testFilter(pokemons, searchValue).toEqual(pokemons);
});

test('Search value not matching any pokemons will return an empty list.', () => {
    let searchValue = 'Pikachu';
    let pokemons = [
        {
            "id": "UG9rZW1vbjowMDE=",
            "number": "001",
            "name": "Bulbasaur",
            "types": [
                "Grass",
                "Poison"
            ]
        }
    ];
    let output = [];

    testFilter(pokemons, searchValue).toEqual(output);
});

test('Search value matching a pokemon name entirely should return the pokemon.', () => {
    let searchValue = 'Bulbasaur';
    let pokemons = [
        {
            "id": "UG9rZW1vbjowMDE=",
            "number": "001",
            "name": "Bulbasaur",
            "types": [
                "Grass",
                "Poison"
            ]
        },
        {
            "id": "UG9rZW1vbjowMDI=",
            "number": "002",
            "name": "Ivysaur",
            "types": [
                "Grass",
                "Poison"
            ]
        },
        {
            "id": "UG9rZW1vbjowMDM=",
            "number": "003",
            "name": "Venusaur",
            "types": [
                "Grass",
                "Poison"
            ]
        }
    ];
    let output = [
        {
            "id": "UG9rZW1vbjowMDE=",
            "number": "001",
            "name": "Bulbasaur",
            "types": [
                "Grass",
                "Poison"
            ]
        }
    ];

    testFilter(pokemons, searchValue).toEqual(output);
});

test('Search value should be case insensitive.', () => {
    let searchValue = 'bulBaSaur';
    let pokemons = [
        {
            "id": "UG9rZW1vbjowMDE=",
            "number": "001",
            "name": "Bulbasaur",
            "types": [
                "Grass",
                "Poison"
            ]
        }
    ];
    let output = [
        {
            "id": "UG9rZW1vbjowMDE=",
            "number": "001",
            "name": "Bulbasaur",
            "types": [
                "Grass",
                "Poison"
            ]
        }
    ];

    testFilter(pokemons, searchValue).toEqual(output);
});

test('Search value matching part of a pokemon name entirely should pokemons containing the value.', () => {
    let searchValue = 'saur';
    let pokemons = [
        {
            "id": "UG9rZW1vbjowMDE=",
            "number": "001",
            "name": "Bulbasaur",
            "types": [
                "Grass",
                "Poison"
            ]
        },
        {
            "id": "UG9rZW1vbjowMDI=",
            "number": "002",
            "name": "Ivysaur",
            "types": [
                "Grass",
                "Poison"
            ]
        },
        {
            "id": "UG9rZW1vbjowMDM=",
            "number": "003",
            "name": "Venusaur",
            "types": [
                "Grass",
                "Poison"
            ]
        }
    ];
    let output = [
        {
            "id": "UG9rZW1vbjowMDE=",
            "number": "001",
            "name": "Bulbasaur",
            "types": [
                "Grass",
                "Poison"
            ]
        },
        {
            "id": "UG9rZW1vbjowMDI=",
            "number": "002",
            "name": "Ivysaur",
            "types": [
                "Grass",
                "Poison"
            ]
        },
        {
            "id": "UG9rZW1vbjowMDM=",
            "number": "003",
            "name": "Venusaur",
            "types": [
                "Grass",
                "Poison"
            ]
        }
    ];

    testFilter(pokemons, searchValue).toEqual(output);
});