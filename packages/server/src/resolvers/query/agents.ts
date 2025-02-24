import { GraphQLFieldResolver } from "graphql/type";
import { Agent, AgentStatus } from "../../__generated__/types";
import { agentStorage } from "../../datasources/agentStorage";

export const agents: GraphQLFieldResolver<undefined, Agent[]> = async () => {
  return ((await agentStorage.read()) ?? []).map((agent: Agent) => ({
    ...agent,
    status: agent.status ?? AgentStatus.Active,
  }));
};
