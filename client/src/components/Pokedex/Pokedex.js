import React from 'react';
import injectSheet from 'react-jss';

import styles from './Pokedex.styles.js';

import { Toolbar, ToolbarGroup, ToolbarTitle, ToolbarSeparator } from 'material-ui/Toolbar';

import { Details } from '../Details';
import { PokemonCard } from '../Cards';
import { SearchField } from '../InputFields';

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
    },
    {
        "id": "UG9rZW1vbjowMDQ=",
        "number": "004",
        "name": "Charmander",
        "types": [
            "Fire"
        ]
    }
];

const Pokedex = class extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pokemons: pokemons ? pokemons : [],
            activePokemonId: null
        };

        this.clearActivePokemonId = this.clearActivePokemonId.bind(this);
        this.filterByName = this.filterByName.bind(this);
        this.filterPokemons = this.filterPokemons.bind(this);
        this.setActivePokemonId = this.setActivePokemonId.bind(this);
    };

    clearActivePokemonId = () => {
        this.setState({
            ...this.state,
            activePokemonId: null
        });
    };

    filterByName = (pokemons, name) => {
        if (!name) {
            return pokemons;
        }

        return pokemons.filter((pokemon) => {
            return String(pokemon.name).toLowerCase().indexOf(String(name).toLowerCase()) >= 0;
        });
    };

    filterPokemons = (pokemons) => {
        return (searchValue) => {
            this.setState({
                ...this.state,
                pokemons: this.filterByName(pokemons, searchValue)
            });
        };
    };

    setActivePokemonId = (id) => {
        this.setState({
            ...this.state,
            activePokemonId: id
        });
    };

    render() {
        return (
            <section className={this.props.classes.Pokedex} >
                <div className={this.props.classes.Pokedex__Container}>
                    <Toolbar className={this.props.classes.Pokedex__Filter} style={styles.Pokedex__Filter}>
                        <ToolbarGroup>
                            <ToolbarTitle text='Filter' />
                            <ToolbarSeparator />
                        </ToolbarGroup>
                        <ToolbarGroup>
                            <SearchField floatingLabelText='Pokémon Name' onChange={this.filterPokemons(pokemons)} />
                        </ToolbarGroup>
                    </Toolbar>

                    <div className={this.props.classes.Pokedex__Results}>
                        {this.state.pokemons.map((pokemon) => {
                            return (
                                <PokemonCard
                                    key={pokemon.id}
                                    number={pokemon.number}
                                    name={pokemon.name}
                                    types={pokemon.types}
                                    onClick={this.setActivePokemonId}
                                />
                            );
                        })}
                    </div>
                </div>

                <div className={`${this.props.classes.Pokedex__Details} ${this.state.activePokemonId ? '' : 'hidden'}`}>
                    <Details
                        activePokemonId={this.state.activePokemonId}
                        onClose={this.clearActivePokemonId}
                    />
                </div>
            </section >
        );
    };
};

const Output = injectSheet(styles)(Pokedex);

export { Pokedex as Base, Output };