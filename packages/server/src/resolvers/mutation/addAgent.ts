import { GraphQLFieldResolver } from "graphql/type";
import { AddAgentInput, Agent } from "../../__generated__/types";
import { agentStorage } from "../../datasources/agentStorage";
import { ServerContext } from "../../types";

export const addAgent: GraphQLFieldResolver<
  undefined,
  ServerContext,
  { input: AddAgentInput },
  Promise<Agent>
> = (_, { input }) => {
  return agentStorage.create<Agent>(input);
};
