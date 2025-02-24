import { GraphQLFieldResolver } from "graphql/type";
import { DeleteAgentInput } from "../../__generated__/types";
import { agentStorage } from "../../datasources/agentStorage";
import { ServerContext } from "../../types";

export const deleteAgent: GraphQLFieldResolver<
  undefined,
  ServerContext,
  { input: DeleteAgentInput },
  Promise<boolean>
> = (_, { input: { id } }) => {
  return agentStorage.delete(id);
};
