import { ApolloClient, InMemoryCache, HttpLink, ApolloLink } from '@apollo/client';
import { onError } from '@apollo/client/link/error';

// Error handling link
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      console.error(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`);
    });
  }
  if (networkError) {
    console.error(`[Network error]: ${networkError}`);
  }
});

// HTTP link for GraphQL server
const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_CMS_BACKEND || 'http://127.0.0.1:1337', // Fallback to localhost
  fetchOptions: {
    mode: 'cors', // Enable CORS
  },
});

// Combine error handling and HTTP link
const link = ApolloLink.from([errorLink, httpLink]);

// Create Apollo Client
const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  connectToDevTools: true, // Enable Apollo DevTools in development
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
      errorPolicy: 'all',
    },
    query: {
      fetchPolicy: 'network-only',
      errorPolicy: 'all',
    },
  },
});

export default client;
