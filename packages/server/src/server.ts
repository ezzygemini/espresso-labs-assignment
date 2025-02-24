import "./dotenv";
import { ApolloServer, BaseContext } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { context } from "./context";
import { typeDefs } from "./typeDefs";
import { resolvers } from "./resovers";

const port: number = +(process.env.PORT ?? 3001);

const server = new ApolloServer<BaseContext>({
  typeDefs,
  resolvers,
});

startStandaloneServer(server, {
  listen: { port },
  context,
}).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
