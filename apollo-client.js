// create apollo client like how it is documented here:
// https://www.apollographql.com/blog/apollo-client/next-js/next-js-getting-started/

import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: process.env.NEXT_RICK_AND_MORTY_API_URL,
    cache: new InMemoryCache(),
});

export default client;