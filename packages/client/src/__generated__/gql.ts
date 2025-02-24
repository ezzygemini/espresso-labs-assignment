/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  fragment AgentFrag on Agent {\n    id\n    email\n    firstName\n    lastName\n    status\n  }\n": typeof types.AgentFragFragmentDoc,
    "\n  query Agents {\n    agents {\n      ...AgentFrag\n    }\n  }\n  \n": typeof types.AgentsDocument,
    "\n  query Agent($id: ID!) {\n    agent(id: $id) {\n      ...AgentFrag\n    }\n  }\n  \n": typeof types.AgentDocument,
    "\n  mutation AddAgent($input: AddAgentInput!) {\n    addAgent(input: $input) {\n      ...AgentFrag\n    }\n  }\n  \n": typeof types.AddAgentDocument,
    "\n  mutation EditAgent($input: EditAgentInput!) {\n    editAgent(input: $input) {\n      ...AgentFrag\n    }\n  }\n  \n": typeof types.EditAgentDocument,
    "\n  mutation DeleteAgent($input: DeleteAgentInput!) {\n    deleteAgent(input: $input)\n  }\n": typeof types.DeleteAgentDocument,
};
const documents: Documents = {
    "\n  fragment AgentFrag on Agent {\n    id\n    email\n    firstName\n    lastName\n    status\n  }\n": types.AgentFragFragmentDoc,
    "\n  query Agents {\n    agents {\n      ...AgentFrag\n    }\n  }\n  \n": types.AgentsDocument,
    "\n  query Agent($id: ID!) {\n    agent(id: $id) {\n      ...AgentFrag\n    }\n  }\n  \n": types.AgentDocument,
    "\n  mutation AddAgent($input: AddAgentInput!) {\n    addAgent(input: $input) {\n      ...AgentFrag\n    }\n  }\n  \n": types.AddAgentDocument,
    "\n  mutation EditAgent($input: EditAgentInput!) {\n    editAgent(input: $input) {\n      ...AgentFrag\n    }\n  }\n  \n": types.EditAgentDocument,
    "\n  mutation DeleteAgent($input: DeleteAgentInput!) {\n    deleteAgent(input: $input)\n  }\n": types.DeleteAgentDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment AgentFrag on Agent {\n    id\n    email\n    firstName\n    lastName\n    status\n  }\n"): (typeof documents)["\n  fragment AgentFrag on Agent {\n    id\n    email\n    firstName\n    lastName\n    status\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Agents {\n    agents {\n      ...AgentFrag\n    }\n  }\n  \n"): (typeof documents)["\n  query Agents {\n    agents {\n      ...AgentFrag\n    }\n  }\n  \n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Agent($id: ID!) {\n    agent(id: $id) {\n      ...AgentFrag\n    }\n  }\n  \n"): (typeof documents)["\n  query Agent($id: ID!) {\n    agent(id: $id) {\n      ...AgentFrag\n    }\n  }\n  \n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation AddAgent($input: AddAgentInput!) {\n    addAgent(input: $input) {\n      ...AgentFrag\n    }\n  }\n  \n"): (typeof documents)["\n  mutation AddAgent($input: AddAgentInput!) {\n    addAgent(input: $input) {\n      ...AgentFrag\n    }\n  }\n  \n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation EditAgent($input: EditAgentInput!) {\n    editAgent(input: $input) {\n      ...AgentFrag\n    }\n  }\n  \n"): (typeof documents)["\n  mutation EditAgent($input: EditAgentInput!) {\n    editAgent(input: $input) {\n      ...AgentFrag\n    }\n  }\n  \n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation DeleteAgent($input: DeleteAgentInput!) {\n    deleteAgent(input: $input)\n  }\n"): (typeof documents)["\n  mutation DeleteAgent($input: DeleteAgentInput!) {\n    deleteAgent(input: $input)\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;