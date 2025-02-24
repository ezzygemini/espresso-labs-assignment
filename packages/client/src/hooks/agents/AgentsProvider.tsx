import { FC, PropsWithChildren } from "react";
import { agentsContext } from "./agentsContext";
import { gql, useLazyQuery, useMutation } from "@apollo/client";
import {
  AddAgentMutation,
  AddAgentMutationVariables,
  AgentQuery,
  AgentQueryVariables,
  AgentsQuery,
  AgentsQueryVariables,
  DeleteAgentMutation,
  DeleteAgentMutationVariables,
  EditAgentMutation,
  EditAgentMutationVariables,
} from "../../__generated__/types";

const agentFrag = gql`
  fragment AgentFrag on Agent {
    id
    email
    firstName
    lastName
    status
  }
`;

const agentsQuery = gql`
  query Agents {
    agents {
      ...AgentFrag
    }
  }
  ${agentFrag}
`;

const agentQuery = gql`
  query Agent($id: ID!) {
    agent(id: $id) {
      ...AgentFrag
    }
  }
  ${agentFrag}
`;

const addAgentMutation = gql`
  mutation AddAgent($input: AddAgentInput!) {
    addAgent(input: $input) {
      ...AgentFrag
    }
  }
  ${agentFrag}
`;

const editAgentMutation = gql`
  mutation EditAgent($input: EditAgentInput!) {
    editAgent(input: $input) {
      ...AgentFrag
    }
  }
  ${agentFrag}
`;

const deleteAgentMutation = gql`
  mutation DeleteAgent($input: DeleteAgentInput!) {
    deleteAgent(input: $input)
  }
`;

export const AgentsProvider: FC<PropsWithChildren> = ({ children }) => {
  const [loadAgents, loadAgentsInfo] = useLazyQuery<
    AgentsQuery,
    AgentsQueryVariables
  >(agentsQuery);
  const [loadAgent, loadAgentInfo] = useLazyQuery<
    AgentQuery,
    AgentQueryVariables
  >(agentQuery);
  const [addAgent, addAgentInfo] = useMutation<
    AddAgentMutation,
    AddAgentMutationVariables
  >(addAgentMutation);
  const [editAgent, editAgentInfo] = useMutation<
    EditAgentMutation,
    EditAgentMutationVariables
  >(editAgentMutation);
  const [deleteAgent, deleteAgentInfo] = useMutation<
    DeleteAgentMutation,
    DeleteAgentMutationVariables
  >(deleteAgentMutation);

  return (
    <agentsContext.Provider
      value={{
        initialized: true,
        loadAgents,
        loadAgentsInfo,
        loadAgent,
        loadAgentInfo,
        addAgent,
        addAgentInfo,
        editAgent,
        editAgentInfo,
        deleteAgent,
        deleteAgentInfo,
      }}
    >
      {children}
    </agentsContext.Provider>
  );
};
