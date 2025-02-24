import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
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

export type AgentKeySpecifier = ('email' | 'firstName' | 'id' | 'lastName' | 'status' | AgentKeySpecifier)[];
export type AgentFieldPolicy = {
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	firstName?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	lastName?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('addAgent' | 'deleteAgent' | 'editAgent' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	addAgent?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteAgent?: FieldPolicy<any> | FieldReadFunction<any>,
	editAgent?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('agent' | 'agents' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	agent?: FieldPolicy<any> | FieldReadFunction<any>,
	agents?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	Agent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AgentKeySpecifier | (() => undefined | AgentKeySpecifier),
		fields?: AgentFieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;