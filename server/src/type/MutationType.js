import {
	GraphQLBoolean,
	GraphQLObjectType,
	GraphQLInt,
	GraphQLString,
	GraphQLList,
	GraphQLNonNull
} from 'graphql';

import { fromGlobalId } from 'graphql-relay';

import { PokemonType, PokemonTrainerType } from './index';

import { addPokemonToTrainer } from '../service/Trainer';

const MutationType = new GraphQLObjectType({
	name: 'Mutation',
	description: 'Endpoint to Create/Update/Delete data',
	fields: () => ({
		collectPokemon: {
			type: PokemonTrainerType,
			args: {
				trainerId: {
					type: new GraphQLNonNull(GraphQLString)
				},
				pokemonId: {
					type: new GraphQLNonNull(GraphQLString)
				}
			},
			resolve: async (obj, { trainerId, pokemonId }) => {
				return await addPokemonToTrainer(trainerId, pokemonId);
			}
		}
	})
});

export default MutationType;
