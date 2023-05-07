import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ApolloProvider from './ApolloProvider';

// const root = ReactDOM(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     {ApolloProvider}
//   </React.StrictMode>
// );

ReactDOM.render(ApolloProvider, document.getElementById('root'));

