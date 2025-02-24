import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

/** Input used to add an agent. */
export type AddAgentInput = {
  /** The email of the agent. */
  email?: InputMaybe<Scalars['String']['input']>;
  /** The first name of the agent. */
  firstName: Scalars['String']['input'];
  /** The last name of the agent. */
  lastName: Scalars['String']['input'];
  /** The status of the agent. */
  status?: InputMaybe<AgentStatus>;
};

/** An object representing the agent. */
export type Agent = {
  __typename?: 'Agent';
  /** The email of the agent. */
  email?: Maybe<Scalars['String']['output']>;
  /** The first name of the agent. */
  firstName: Scalars['String']['output'];
  /** The ID of the agent. */
  id: Scalars['ID']['output'];
  /** The last name of the agent. */
  lastName: Scalars['String']['output'];
  /** The status of the agent. */
  status: AgentStatus;
};

/** The status of the agent. */
export enum AgentStatus {
  /** The agent is active. */
  Active = 'ACTIVE',
  /** The agent is inactive. */
  Inactive = 'INACTIVE'
}

/** Input used to filter agents. */
export type AgentsFilter = {
  /** The email of the agent. */
  email?: InputMaybe<Scalars['String']['input']>;
  /** A regex to match the email of the agent. */
  emailRegex?: InputMaybe<Scalars['String']['input']>;
  /** The first name of the agent. */
  firstName?: InputMaybe<Scalars['String']['input']>;
  /** A regex to match the first name of the agent. */
  firstNameRegex?: InputMaybe<Scalars['String']['input']>;
  /** The last name of the agent. */
  lastName?: InputMaybe<Scalars['String']['input']>;
  /** A regex to match the last name of the agent. */
  lastNameRegex?: InputMaybe<Scalars['String']['input']>;
  /** The status of the agent. */
  status?: InputMaybe<AgentStatus>;
};

/** Input used to sort agents. */
export type AgentsSort = {
  /** The field to sort by. */
  sortBy: AgentsSortBy;
  /** The order to sort by. */
  sortOrder: SortOrder;
};

/** The field to sort by. */
export enum AgentsSortBy {
  /** The email of the agent. */
  Email = 'EMAIL',
  /** The first name of the agent. */
  FirstName = 'FIRST_NAME',
  /** The last name of the agent. */
  LastName = 'LAST_NAME',
  /** The status of the agent. */
  Status = 'STATUS'
}

/** Input used to delete an agent. */
export type DeleteAgentInput = {
  /** The ID of the agent to delete. */
  id: Scalars['ID']['input'];
};

/** Input used to edit an agent. */
export type EditAgentInput = {
  /** The email of the agent. */
  email?: InputMaybe<Scalars['String']['input']>;
  /** The first name of the agent. */
  firstName?: InputMaybe<Scalars['String']['input']>;
  /** The ID of the agent to edit. */
  id: Scalars['ID']['input'];
  /** The last name of the agent. */
  lastName?: InputMaybe<Scalars['String']['input']>;
  /** The status of the agent. */
  status: AgentStatus;
};

/** Global mutation object. */
export type Mutation = {
  __typename?: 'Mutation';
  /** Add an agent. */
  addAgent: Agent;
  /** Delete an agent. */
  deleteAgent: Scalars['Boolean']['output'];
  /** Edit an agent. */
  editAgent: Agent;
};


/** Global mutation object. */
export type MutationAddAgentArgs = {
  input: AddAgentInput;
};


/** Global mutation object. */
export type MutationDeleteAgentArgs = {
  input: DeleteAgentInput;
};


/** Global mutation object. */
export type MutationEditAgentArgs = {
  input: EditAgentInput;
};

/** Global query object. */
export type Query = {
  __typename?: 'Query';
  /** Get an agent by ID. */
  agent?: Maybe<Agent>;
  /** Get all agents. */
  agents: Array<Agent>;
};


/** Global query object. */
export type QueryAgentArgs = {
  id: Scalars['ID']['input'];
};


/** Global query object. */
export type QueryAgentsArgs = {
  filter?: InputMaybe<AgentsFilter>;
  sort?: InputMaybe<Array<AgentsSort>>;
};

/** The order to sort by. */
export enum SortOrder {
  /** Ascending order. */
  Asc = 'ASC',
  /** Descending order. */
  Desc = 'DESC'
}

export type AgentFragFragment = { __typename?: 'Agent', id: string, email?: string | null, firstName: string, lastName: string, status: AgentStatus };

export type AgentsQueryVariables = Exact<{ [key: string]: never; }>;


export type AgentsQuery = { __typename?: 'Query', agents: Array<{ __typename?: 'Agent', id: string, email?: string | null, firstName: string, lastName: string, status: AgentStatus }> };

export type AgentQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type AgentQuery = { __typename?: 'Query', agent?: { __typename?: 'Agent', id: string, email?: string | null, firstName: string, lastName: string, status: AgentStatus } | null };

export type AddAgentMutationVariables = Exact<{
  input: AddAgentInput;
}>;


export type AddAgentMutation = { __typename?: 'Mutation', addAgent: { __typename?: 'Agent', id: string, email?: string | null, firstName: string, lastName: string, status: AgentStatus } };

export type EditAgentMutationVariables = Exact<{
  input: EditAgentInput;
}>;


export type EditAgentMutation = { __typename?: 'Mutation', editAgent: { __typename?: 'Agent', id: string, email?: string | null, firstName: string, lastName: string, status: AgentStatus } };

export type DeleteAgentMutationVariables = Exact<{
  input: DeleteAgentInput;
}>;


export type DeleteAgentMutation = { __typename?: 'Mutation', deleteAgent: boolean };

export const AgentFragFragmentDoc = gql`
    fragment AgentFrag on Agent {
  id
  email
  firstName
  lastName
  status
}
    `;
export const AgentsDocument = gql`
    query Agents {
  agents {
    ...AgentFrag
  }
}
    ${AgentFragFragmentDoc}`;

/**
 * __useAgentsQuery__
 *
 * To run a query within a React component, call `useAgentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAgentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAgentsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAgentsQuery(baseOptions?: Apollo.QueryHookOptions<AgentsQuery, AgentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AgentsQuery, AgentsQueryVariables>(AgentsDocument, options);
      }
export function useAgentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AgentsQuery, AgentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AgentsQuery, AgentsQueryVariables>(AgentsDocument, options);
        }
export function useAgentsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<AgentsQuery, AgentsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AgentsQuery, AgentsQueryVariables>(AgentsDocument, options);
        }
export type AgentsQueryHookResult = ReturnType<typeof useAgentsQuery>;
export type AgentsLazyQueryHookResult = ReturnType<typeof useAgentsLazyQuery>;
export type AgentsSuspenseQueryHookResult = ReturnType<typeof useAgentsSuspenseQuery>;
export type AgentsQueryResult = Apollo.QueryResult<AgentsQuery, AgentsQueryVariables>;
export const AgentDocument = gql`
    query Agent($id: ID!) {
  agent(id: $id) {
    ...AgentFrag
  }
}
    ${AgentFragFragmentDoc}`;

/**
 * __useAgentQuery__
 *
 * To run a query within a React component, call `useAgentQuery` and pass it any options that fit your needs.
 * When your component renders, `useAgentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAgentQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useAgentQuery(baseOptions: Apollo.QueryHookOptions<AgentQuery, AgentQueryVariables> & ({ variables: AgentQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AgentQuery, AgentQueryVariables>(AgentDocument, options);
      }
export function useAgentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AgentQuery, AgentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AgentQuery, AgentQueryVariables>(AgentDocument, options);
        }
export function useAgentSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<AgentQuery, AgentQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AgentQuery, AgentQueryVariables>(AgentDocument, options);
        }
export type AgentQueryHookResult = ReturnType<typeof useAgentQuery>;
export type AgentLazyQueryHookResult = ReturnType<typeof useAgentLazyQuery>;
export type AgentSuspenseQueryHookResult = ReturnType<typeof useAgentSuspenseQuery>;
export type AgentQueryResult = Apollo.QueryResult<AgentQuery, AgentQueryVariables>;
export const AddAgentDocument = gql`
    mutation AddAgent($input: AddAgentInput!) {
  addAgent(input: $input) {
    ...AgentFrag
  }
}
    ${AgentFragFragmentDoc}`;
export type AddAgentMutationFn = Apollo.MutationFunction<AddAgentMutation, AddAgentMutationVariables>;

/**
 * __useAddAgentMutation__
 *
 * To run a mutation, you first call `useAddAgentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddAgentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addAgentMutation, { data, loading, error }] = useAddAgentMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddAgentMutation(baseOptions?: Apollo.MutationHookOptions<AddAgentMutation, AddAgentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddAgentMutation, AddAgentMutationVariables>(AddAgentDocument, options);
      }
export type AddAgentMutationHookResult = ReturnType<typeof useAddAgentMutation>;
export type AddAgentMutationResult = Apollo.MutationResult<AddAgentMutation>;
export type AddAgentMutationOptions = Apollo.BaseMutationOptions<AddAgentMutation, AddAgentMutationVariables>;
export const EditAgentDocument = gql`
    mutation EditAgent($input: EditAgentInput!) {
  editAgent(input: $input) {
    ...AgentFrag
  }
}
    ${AgentFragFragmentDoc}`;
export type EditAgentMutationFn = Apollo.MutationFunction<EditAgentMutation, EditAgentMutationVariables>;

/**
 * __useEditAgentMutation__
 *
 * To run a mutation, you first call `useEditAgentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditAgentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editAgentMutation, { data, loading, error }] = useEditAgentMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useEditAgentMutation(baseOptions?: Apollo.MutationHookOptions<EditAgentMutation, EditAgentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditAgentMutation, EditAgentMutationVariables>(EditAgentDocument, options);
      }
export type EditAgentMutationHookResult = ReturnType<typeof useEditAgentMutation>;
export type EditAgentMutationResult = Apollo.MutationResult<EditAgentMutation>;
export type EditAgentMutationOptions = Apollo.BaseMutationOptions<EditAgentMutation, EditAgentMutationVariables>;
export const DeleteAgentDocument = gql`
    mutation DeleteAgent($input: DeleteAgentInput!) {
  deleteAgent(input: $input)
}
    `;
export type DeleteAgentMutationFn = Apollo.MutationFunction<DeleteAgentMutation, DeleteAgentMutationVariables>;

/**
 * __useDeleteAgentMutation__
 *
 * To run a mutation, you first call `useDeleteAgentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAgentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAgentMutation, { data, loading, error }] = useDeleteAgentMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteAgentMutation(baseOptions?: Apollo.MutationHookOptions<DeleteAgentMutation, DeleteAgentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteAgentMutation, DeleteAgentMutationVariables>(DeleteAgentDocument, options);
      }
export type DeleteAgentMutationHookResult = ReturnType<typeof useDeleteAgentMutation>;
export type DeleteAgentMutationResult = Apollo.MutationResult<DeleteAgentMutation>;
export type DeleteAgentMutationOptions = Apollo.BaseMutationOptions<DeleteAgentMutation, DeleteAgentMutationVariables>;