import { getPokemons } from '../Pokemon';

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

test('Specifying no limit should return entire list.', async () => {
	let output = [
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
	];

	expect(await getPokemons()).toEqual(output);
});

test('Specifying a limit of N should return the first N items of list.', async () => {
	let limit = 2;
	let output = [
		{
			id: '001',
			name: 'Bulbasaur'
		},
		{
			id: '002',
			name: 'Ivysaur'
		}
	];

	expect(await getPokemons(limit)).toEqual(output);
});

test('Specifying a limit greater than the list length should return the entire list.', async () => {
	let limit = 4;
	let output = [
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
	];

	expect(await getPokemons(limit)).toEqual(output);
});

test('Specifying a limit of 0 should return null.', async () => {
	let limit = 0;

	expect(await getPokemons(limit)).toBeNull();
});

test('Specifying a negative limit should return null.', async () => {
	let limit = -1;

	expect(await getPokemons(limit)).toBeNull();
});
