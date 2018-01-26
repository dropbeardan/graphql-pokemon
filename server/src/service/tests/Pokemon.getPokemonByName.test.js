import { getPokemonByName } from '../Pokemon';

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

test('Specifying no name should return null.', async () => {
	expect(await getPokemonByName()).toBeNull();
});

test('Specifying an invalid name should return null.', async () => {
	let name = 'Charizard';

	expect(await getPokemonByName(name)).toBeNull();
});

test('Specifying a valid name should return with the corresponding pokemon.', async () => {
	let name = 'Bulbasaur';
	let output = { id: '001', name: 'Bulbasaur' };

	expect(await getPokemonByName(name)).toEqual(output);
});
