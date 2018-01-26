import { addPokemonToTrainer } from '../Trainer';

jest.unmock('../../datasource');

class MockTrainers {
	constructor(trainers) {
		this._trainers = trainers;
	}

	get state() {
		return this._trainers;
	}

	update(newState) {
		this._trainers = [...newState];
	}
}

const datasource = require('../../datasource');
const mockData = {
	id: '001',
	firstName: 'Ash',
	lastName: 'Ketchum',
	username: 'PokemonMaster',
	password: '',
	pokemons: ['001', '002', '003']
};

beforeEach(() => {
	// Reset Mock State.
	datasource.trainersController = new MockTrainers([mockData]);
});

test('Specifying an invalid pokemonId will throw an error.', async () => {
	let trainerId = '001';
	let pokemonId = 'abc';

	await expect(addPokemonToTrainer(trainerId, pokemonId)).rejects.toThrow();
});

test('Specifying an invalid trainerId will throw an error.', async () => {
	let trainerId = 'abc';
	let pokemonId = '001';

	await expect(addPokemonToTrainer(trainerId, pokemonId)).rejects.toThrow();
});

test('Specifying a valid trainerId and pokemonId will return a valid response.', async () => {
	let trainerId = '001';
	let pokemonId = '001';
	let output = mockData;

	expect(await addPokemonToTrainer(trainerId, pokemonId)).toEqual(output);
});

test('Specifying a pokemonId that is already linked to a trainerId will not add another pokemonId to the list.', async () => {
	let trainerId = '001';
	let pokemonIds = ['001', '002', '003'];
	let output = mockData;

	await Promise.all(
		pokemonIds.map(async pokemonId => {
			expect(await addPokemonToTrainer(trainerId, pokemonId)).toEqual(
				output
			);
		})
	);
});

test('Specifying a pokemonId that is already linked to a trainerId will not add another pokemonId to the list.', async () => {
	let trainerId = '001';
	let pokemonIds = ['004'];
	let output = {
		...mockData,
		pokemons: [...mockData.pokemons, '004']
	};

	await Promise.all(
		pokemonIds.map(async pokemonId => {
			expect(await addPokemonToTrainer(trainerId, pokemonId)).toEqual(
				output
			);
		})
	);
});
