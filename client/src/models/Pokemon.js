import gql from 'graphql-tag';

import Fragments from './Fragments';

const getAll = gql`
	${Fragments.attacks}
	${Fragments.evolutions}
	${Fragments.evolutionRequirements}
	${Fragments.height}
	${Fragments.weight}

	query Pokemons($first: Int) {
		pokemons(first: $first) {
			id
			image
			name
			number
			types
			classification
			...weight
			...height
			fleeRate
			maxHP
			maxCP
			...attacks
			weaknesses
			resistant
			...evolutions
			...evolutionRequirements
		}
	}
`;

const getAllSummary = gql`
	query Pokemons($first: Int) {
		pokemons(first: $first) {
			id
			image
			name
			number
			types
			classification
		}
	}
`;

const getById = gql`
	${Fragments.attacks}
	${Fragments.evolutions}
	${Fragments.evolutionRequirements}
	${Fragments.height}
	${Fragments.weight}

	query Pokemon($id: String!) {
		pokemon(id: $id) {
			id
			image
			name
			number
			types
			classification
			...weight
			...height
			fleeRate
			maxHP
			maxCP
			...attacks
			weaknesses
			resistant
			...evolutions
			...evolutionRequirements
		}
	}
`;

const getSummaryById = gql`
	${Fragments.attacks}
	${Fragments.evolutions}
	${Fragments.evolutionRequirements}
	${Fragments.height}
	${Fragments.weight}

	query Pokemon($id: String!) {
		pokemon(id: $id) {
			id
			image
			name
			number
			types
			classification
		}
	}
`;

export default {
	getAll,
	getAllSummary,
	getById,
	getSummaryById
};
