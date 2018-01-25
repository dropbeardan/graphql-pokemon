import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const serverURI = {
    development: 'https://graphql-pokemon.now.sh',
    production: 'https://graphql-pokemon.now.sh'
};

const client = new ApolloClient({
    link: new HttpLink({ uri: serverURI[process.env.NODE_ENV] }),
    cache: new InMemoryCache()
});

const provider = (children) => {
    return (
        <ApolloProvider client={client}>
            {children}
        </ApolloProvider>
    );
};

export default provider;