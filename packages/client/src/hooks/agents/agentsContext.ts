import { createContext } from "react";
import {
  AddAgentMutationFn,
  AddAgentMutationResult,
  AgentQuery,
  AgentQueryResult,
  AgentQueryVariables,
  AgentsQuery,
  AgentsQueryResult,
  AgentsQueryVariables,
  DeleteAgentMutationFn,
  DeleteAgentMutationResult,
  EditAgentMutationFn,
  EditAgentMutationResult,
} from "../../__generated__/types.ts";
import { LazyQueryExecFunction } from "@apollo/client";

interface AgentsContext {
  initialized: boolean;
  loadAgents: LazyQueryExecFunction<AgentsQuery, AgentsQueryVariables>;
  loadAgentsInfo: AgentsQueryResult;
  loadAgent: LazyQueryExecFunction<AgentQuery, AgentQueryVariables>;
  loadAgentInfo: AgentQueryResult;
  addAgent: AddAgentMutationFn;
  addAgentInfo: AddAgentMutationResult;
  editAgent: EditAgentMutationFn;
  editAgentInfo: EditAgentMutationResult;
  deleteAgent: DeleteAgentMutationFn;
  deleteAgentInfo: DeleteAgentMutationResult;
}

export const agentsContext = createContext<AgentsContext>({} as AgentsContext);
