import { GraphQLFieldResolver } from "graphql/type";
import { Agent, EditAgentInput } from "../../__generated__/types";
import { ServerContext } from "../../types";
import { agentStorage } from "../../datasources/agentStorage";

export const editAgent: GraphQLFieldResolver<
  undefined,
  ServerContext,
  { input: EditAgentInput },
  Promise<Agent>
> = (_, { input }) => {
  return agentStorage.update<Agent>(input.id, input as Partial<Agent>);
};
