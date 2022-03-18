import { render } from "@testing-library/react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
   cache: new InMemoryCache(),
   uri: process.env.REACT_APP_API_URL,
});

const customRender = (ui: React.ReactNode) => {
   return render(<ApolloProvider client={client}>{ui}</ApolloProvider>);
};

export { customRender };
