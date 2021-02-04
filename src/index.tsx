import React from 'react';
import ReactDOM from 'react-dom';
import './tailwind.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import App from './App';

const client = new ApolloClient({
  uri: 'https://graphqlzero.almansi.me/api',
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root'),
);
