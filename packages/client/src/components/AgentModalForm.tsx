import { Agent, AgentStatus } from "../__generated__/types";
import { FC, useMemo, useState } from "react";
import styled from "@emotion/styled";

const options: AgentStatus[] = [AgentStatus.Active, AgentStatus.Inactive];

const AgentModalFormStyle = styled.form`
  position: fixed;
  width: 50%;
  height: 80%;
  top: 10%;
  left: 25%;
  background-color: var(--darkest);
  color: var(--lightest);
  border: 3px solid var(--lightest);
  border-radius: 0.25em;
  box-shadow: 0 0.25em 0.5em rgba(0, 0, 0, 0.2);
  padding: 2em;
  display: flex;
  flex-direction: column;
  gap: 1em;
  justify-content: center;

  h2 {
    margin-bottom: 1.5em;
  }

  .name {
    display: flex;
    gap: 1em;
    > input {
      flex: 1;
    }
  }

  button {
    margin-top: 1em;
  }
`;

interface Props {
  agent?: Partial<Agent>;
  onSubmit: (agent: Partial<Agent>) => void;
}

export const AgentModalForm: FC<Props> = ({ agent: initAgent, onSubmit }) => {
  const [agent, setAgent] = useState<Partial<Agent>>(
    initAgent ?? { status: AgentStatus.Active },
  );

  const handleChange = (newValues: Partial<Agent>) => {
    setAgent((oldAgent) => ({
      ...oldAgent,
      ...newValues,
    }));
  };

  const isButtonDisabled = useMemo(() => {
    return !agent.firstName || !agent.lastName || !agent.email;
  }, [agent]);

  return (
    <AgentModalFormStyle
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(agent);
      }}
    >
      <h2>New Agent</h2>
      <hr />
      <div className="name">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={agent.firstName ?? ""}
          onChange={(e) => handleChange({ firstName: e.target.value })}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={agent.lastName ?? ""}
          onChange={(e) => handleChange({ lastName: e.target.value })}
        />
      </div>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={agent.email ?? ""}
        onChange={(e) => handleChange({ email: e.target.value })}
      />
      <select
        name="status"
        onChange={(e) =>
          handleChange({ status: e.target.value as AgentStatus })
        }
      >
        {Object.values(options).map((option) => (
          <option selected={agent.status === option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <hr />
      <button disabled={isButtonDisabled} type="submit">
        Save Agent
      </button>
    </AgentModalFormStyle>
  );
};
