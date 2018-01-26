import React from 'react';
import { Link } from 'react-router-dom';
import injectSheet from 'react-jss';
import { graphql } from 'react-apollo';
import { compose } from 'recompose';

import { Pokemon } from '../../models';

import styles from './Pokedex.styles.js';

import { Toolbar, ToolbarGroup, ToolbarSeparator } from 'material-ui/Toolbar';

import { PokemonCard } from '../Cards';
import { Logo } from '../Content';
import { Details } from '../Details';
import { SearchField } from '../InputFields';
import { LoadingOverlay } from '../Overlays';

const Pokedex = class extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: true,
			pokemons: [],
			activePokemonId: null
		};

		this.clearActivePokemonId = this.clearActivePokemonId.bind(this);
		this.filterByName = this.filterByName.bind(this);
		this.filterPokemons = this.filterPokemons.bind(this);
		this.setActivePokemonId = this.setActivePokemonId.bind(this);
	}

	componentWillUpdate = props => {
		if (
			this.state.loading &&
			!props.PokemonGQL.loading &&
			Array.isArray(props.PokemonGQL.pokemons)
		) {
			this.setState({
				...this.state,
				pokemons: props.PokemonGQL.pokemons,
				loading: false
			});
		}
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

		return pokemons.filter(pokemon => {
			return (
				String(pokemon.name)
					.toLowerCase()
					.indexOf(String(name).toLowerCase()) >= 0
			);
		});
	};

	filterPokemons = pokemons => {
		return searchValue => {
			this.setState({
				...this.state,
				pokemons: this.filterByName(pokemons, searchValue)
			});
		};
	};

	setActivePokemonId = id => {
		return () => {
			this.setState({
				...this.state,
				activePokemonId: id
			});
		};
	};

	render() {
		if (this.props.PokemonGQL && this.props.PokemonGQL.loading) {
			return <LoadingOverlay size={120} description="Starting Pokédex" />;
		}

		const pokemons = this.props.PokemonGQL.pokemons
			? this.props.PokemonGQL.pokemons
			: [];

		const detailsWindow = (
			<div className={this.props.classes.Pokedex__Details}>
				<Details
					activePokemonId={this.state.activePokemonId}
					onClose={this.clearActivePokemonId}
					changePokemonHandler={this.setActivePokemonId}
				/>
			</div>
		);

		return (
			<section className={this.props.classes.Pokedex}>
				<div className={this.props.classes.Pokedex__Container}>
					<Toolbar
						className={this.props.classes.Pokedex__Filter}
						style={styles.Pokedex__Filter}
					>
						<ToolbarGroup>
							<Link
								to="/"
								title="Pokémon GraphQL Home"
								className={
									this.props.classes.Pokedex__Filter__Logo
								}
							>
								<Logo />
							</Link>
							<ToolbarSeparator />
						</ToolbarGroup>
						<ToolbarGroup>
							<SearchField
								floatingLabelText="Pokémon Name"
								onChange={this.filterPokemons(pokemons)}
							/>
						</ToolbarGroup>
					</Toolbar>

					<div className={this.props.classes.Pokedex__Results}>
						{this.state.pokemons.map(pokemon => {
							return (
								<PokemonCard
									key={pokemon.id}
									image={pokemon.image}
									number={pokemon.number}
									name={pokemon.name}
									types={pokemon.types}
									classification={pokemon.classification}
									hint="Click to View Details"
									onClick={this.setActivePokemonId(
										pokemon.id
									)}
								/>
							);
						})}
					</div>
				</div>

				{this.state.activePokemonId ? detailsWindow : null}
			</section>
		);
	}
};

const Output = compose(
	graphql(Pokemon.getAllSummary, {
		name: 'PokemonGQL',
		options: props => ({
			variables: {
				first: 9999
			}
		})
	}),
	injectSheet(styles)
)(Pokedex);

export { Pokedex as Base, Output };
