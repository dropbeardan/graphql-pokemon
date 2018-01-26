import { getPokemonsByEvolutions } from '../Pokemon';

jest.mock('../../datasource', () => {
	return {
		pokemons: [
			{
				id: '001',
				name: 'Bulbasaur'
			},
			{
				id: '002',
				name: 'Ivysaur'
			},
			{
				id: '003',
				name: 'Venusaur'
			}
		]
	};
});

test('Specifying no evolutions should return null.', async () => {
	expect(await getPokemonsByEvolutions()).toBeNull();
});

test('A list containing all valid evolutions should return a list of corresponding pokemons.', async () => {
	let evolutions = [{ id: 1, name: 'Bulbasaur' }, { id: 2, name: 'Ivysaur' }];
	let output = [
		{ id: '001', name: 'Bulbasaur' },
		{ id: '002', name: 'Ivysaur' }
	];

	expect(await getPokemonsByEvolutions(evolutions)).toEqual(output);
});

test('A list containing no valid evolutions should return null.', async () => {
	let evolutions = [
		{ id: 4, name: 'Charmander' },
		{ id: 5, name: 'Charmeleon' }
	];

	expect(await getPokemonsByEvolutions(evolutions)).toBeNull();
});

test('A list containing some valid ids should only return a list of corresponding valid pokemons.', async () => {
	let evolutions = [
		{ id: 1, name: 'Bulbasaur' },
		{ id: 4, name: 'Charmander' },
		{ id: 2, name: 'Ivysaur' },
		{ id: 5, name: 'Charmeleon' }
	];
	let output = [
		{ id: '001', name: 'Bulbasaur' },
		{ id: '002', name: 'Ivysaur' }
	];

	expect(await getPokemonsByEvolutions(evolutions)).toEqual(output);
});
