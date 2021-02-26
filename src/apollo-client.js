// import { ApolloClient, HttpLink, ApolloLink, InMemoryCache, concat } from '@apollo/client';

// const httpLink = new HttpLink({ uri: 'http://localhost:8000/graphql/' });

// const authMiddleware = new ApolloLink((operation, forward) => {
//     // add the authorization to the headers
//     operation.setContext({
//         headers: {
//             authorization: localStorage.getItem('token') || null,
//         },
//     });
//     console.log('token');

//     return forward(operation);
// });

// const client = new ApolloClient({
//     cache: new InMemoryCache(),
//     link: concat(authMiddleware, httpLink),
// });
// export { client };

import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
    uri: 'http://localhost:8000/graphql/',
});

export { client };
