import { pokemons } from '../datasource';

const getPokemonById = async pokemonId => {
	const pokemon = pokemons.find(pokemon => {
		return parseInt(pokemon.id, 10) === parseInt(pokemonId, 10);
	});

	return pokemon || null;
};

const getPokemonByName = async pokemonName => {
	if (!pokemonName) {
		return null;
	}

	let pokemon = pokemons.find(pokemon => {
		return pokemon.name.toLowerCase() === pokemonName.toLowerCase().trim();
	});

	return pokemon || null;
};

const getPokemons = async limit => {
	let pokemonList =
		limit || limit === 0 ? pokemons.slice(0, Math.max(limit, 0)) : pokemons;

	return pokemonList.length > 0 ? pokemonList : null;
};

const getPokemonsByEvolutions = async evolutions => {
	let pokemonNames = evolutions
		? evolutions.map(evolution => {
				return evolution.name.toLowerCase().trim();
			})
		: [];

	let searchResults = await Promise.all(
		pokemonNames.map(name => {
			return getPokemonByName(name);
		})
	);

	let pokemonList = searchResults.filter(pokemon => {
		return pokemon !== null;
	});

	return pokemonList.length > 0 ? pokemonList : null;
};

const getPokemonsByIds = async pokemonIds => {
	let ids = pokemonIds ? pokemonIds : [];

	let searchResults = await Promise.all(
		ids.map(pokemonId => {
			return getPokemonById(pokemonId);
		})
	);

	let pokemonList = searchResults.filter(pokemon => {
		return pokemon !== null;
	});

	return pokemonList.length > 0 ? pokemonList : null;
};

export {
	getPokemonById,
	getPokemonByName,
	getPokemons,
	getPokemonsByEvolutions,
	getPokemonsByIds
};
