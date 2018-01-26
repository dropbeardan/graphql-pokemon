import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLInt,
	GraphQLFloat,
	GraphQLList
} from 'graphql';
import { globalIdField } from 'graphql-relay';

import { PokemonType } from './index';

import { getPokemonsByIds } from '../service/Pokemon';

const PokemonTrainerType = new GraphQLObjectType({
	name: 'PokemonTrainer',
	description: 'Represents a Pokémon Trainer (User).',
	fields: () => ({
		id: globalIdField('PokemonTrainer'),
		firstName: {
			type: GraphQLString,
			description: 'The identifier of this Pokémon',
			resolve: obj => obj.firstName
		},
		lastName: {
			type: GraphQLString,
			description: 'The name of this Pokémon',
			resolve: obj => obj.lastName
		},
		username: {
			type: GraphQLString,
			description: 'The minimum and maximum weight of this Pokémon',
			resolve: obj => obj.username
		},
		pokemons: {
			type: new GraphQLList(PokemonType),
			description: 'The minimum and maximum weight of this Pokémon',
			resolve: async obj => getPokemonsByIds(obj.pokemons)
		}
	})
});

export default PokemonTrainerType;
