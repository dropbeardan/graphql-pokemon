import { getPokemonById } from '../Pokemon';

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

test('Specifying no id should return null.', async () => {
	expect(await getPokemonById()).toBeNull();
});

test('Specifying a valid id should return a corresponding pokemon.', async () => {
	let scenarios = [
		{ id: '001', output: { id: '001', name: 'Bulbasaur' } },
		{ id: '002', output: { id: '002', name: 'Ivysaur' } },
		{ id: '003', output: { id: '003', name: 'Venusaur' } }
	];

	await Promise.all(
		scenarios.map(async scenario => {
			return expect(await getPokemonById(scenario.id)).toEqual(
				scenario.output
			);
		})
	);
});

test('Specifying a numeric equivalence of a valid id should return the corresponding pokemon.', async () => {
	let scenarios = [
		{ id: 1, output: { id: '001', name: 'Bulbasaur' } },
		{ id: '01', output: { id: '001', name: 'Bulbasaur' } },
		{ id: '0001', output: { id: '001', name: 'Bulbasaur' } }
	];

	await Promise.all(
		scenarios.map(async scenario => {
			return expect(await getPokemonById(scenario.id)).toEqual(
				scenario.output
			);
		})
	);
});

test('Specifying an invalid id should return null.', async () => {
	let ids = [0, '00', '004', 'a', true];

	await Promise.all(
		ids.map(async id => {
			return expect(await getPokemonById(id)).toBeNull();
		})
	);
});
