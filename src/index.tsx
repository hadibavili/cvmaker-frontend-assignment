import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const client = new ApolloClient({
   cache: new InMemoryCache(),
   uri: process.env.REACT_APP_API_URL,
});

ReactDOM.render(
   <React.StrictMode>
      <ApolloProvider client={client}>
         <App />
      </ApolloProvider>
   </React.StrictMode>,
   document.getElementById("root")
);

serviceWorker.unregister();
