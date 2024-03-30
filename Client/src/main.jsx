import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import { ApolloProvider} from "react-apollo"
import ApolloClient,{InMemoryCache} from "apollo-boost"

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
   cache: new InMemoryCache(),
})


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
      </BrowserRouter>
  </React.StrictMode>,
)
