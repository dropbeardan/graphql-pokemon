import { GraphQLSchema } from 'graphql';

import { QueryType, MutationType } from './type';

const schema = new GraphQLSchema({
	query: QueryType,
	mutation: MutationType
});

export default schema;
