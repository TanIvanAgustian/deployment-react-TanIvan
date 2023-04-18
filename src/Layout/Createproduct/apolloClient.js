import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: "https://literate-mackerel-87.hasura.app/v1/graphql",
    cache: new InMemoryCache(),
    headers:{
        "content-type": "application/json",
        "x-hasura-admin-secret": "C2ZnSJEPYK3HTJUL0PAivTTl0gNQw1KUlnQSkXsHGqesuxtnrptKGPMMHNL2dWYI"
    }
});

export default client;