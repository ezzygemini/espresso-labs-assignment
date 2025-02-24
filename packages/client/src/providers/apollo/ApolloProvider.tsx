import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider as CoreApolloProvider,
} from "@apollo/client";
import { FC, PropsWithChildren } from "react";

const client = new ApolloClient({
  uri: import.meta.env.VITE_GRAPHQL_SERVER_URI,
  cache: new InMemoryCache(),
});

export const ApolloProvider: FC<PropsWithChildren> = ({ children }) => {
  return <CoreApolloProvider client={client}>{children}</CoreApolloProvider>;
};
