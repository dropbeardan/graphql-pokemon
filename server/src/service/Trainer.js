import { pokemons, trainersController as pokemonTrainers } from '../datasource';

const addPokemonToTrainer = async (trainerId, pokemonId) => {
	const validPokemon = pokemons.find(pokemon => {
		return pokemon.id == pokemonId;
	});

	if (!validPokemon) {
		throw new Error('Invalid pokemonId.');
	}

	let trainerIndex = pokemonTrainers.state.findIndex(trainer => {
		return trainer.id == trainerId;
	});

	if (trainerIndex < 0) {
		throw new Error('Invalid trainerId.');
	}

	let trainer = pokemonTrainers.state[trainerIndex];

	// Only one of each Pokemon is marked as caught by the trainer, similar to a collector's mindset.
	let updatedPokemons = trainer.pokemons.includes(pokemonId)
		? trainer.pokemons
		: [...trainer.pokemons, pokemonId];

	let updatedTrainers = [
		...pokemonTrainers.state.slice(0, trainerIndex),
		{
			...trainer,
			pokemons: updatedPokemons
		},
		...pokemonTrainers.state.slice(trainerIndex + 1)
	];

	// Update JSON and cached data in place of a real database.
	pokemonTrainers.update(updatedTrainers);

	return updatedTrainers[trainerIndex];
};

export { addPokemonToTrainer };
