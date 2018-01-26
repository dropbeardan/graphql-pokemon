import { getPokemonsByIds } from '../Pokemon';

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

test('Specifying no ids should return null.', async () => {
	expect(await getPokemonsByIds()).toBeNull();
});

test('A list containing all valid ids should return a list of corresponding pokemons.', async () => {
	let ids = ['001', '002'];
	let output = [
		{ id: '001', name: 'Bulbasaur' },
		{ id: '002', name: 'Ivysaur' }
	];

	expect(await getPokemonsByIds(ids)).toEqual(output);
});

test('A list containing no valid ids should return null.', async () => {
	let ids = ['004', '005'];

	expect(await getPokemonsByIds(ids)).toBeNull();
});

test('A list containing some valid ids should only return a list of corresponding valid pokemons.', async () => {
	let ids = ['000', '001', '004', '002', '005'];
	let output = [
		{ id: '001', name: 'Bulbasaur' },
		{ id: '002', name: 'Ivysaur' }
	];

	expect(await getPokemonsByIds(ids)).toEqual(output);
});
