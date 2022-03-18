import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import renderer from "react-test-renderer";
import App from "./App";

const client = new ApolloClient({
   cache: new InMemoryCache(),
   uri: process.env.REACT_APP_API_URL,
});

describe("App", () => {
   it("App snapshot testing", () => {
      const countries = renderer
         .create(
            <ApolloProvider client={client}>
               <App />
            </ApolloProvider>
         )
         .toJSON();
      expect(countries).toMatchSnapshot();
   });
});
