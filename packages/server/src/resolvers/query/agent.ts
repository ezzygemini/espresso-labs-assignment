import { GraphQLFieldResolver } from "graphql/type";
import { ServerContext } from "../../types";
import { Agent, AgentStatus } from "../../__generated__/types";
import { agentStorage } from "../../datasources/agentStorage";

export const agent: GraphQLFieldResolver<
  undefined,
  ServerContext,
  { id: string },
  Promise<Agent>
> = async (_, { id }) => {
  const agent: Partial<Agent> = ((await agentStorage.read(id)) as Agent) ?? {};
  agent.status = agent.status ?? AgentStatus.Inactive;
  return agent as Agent;
};
