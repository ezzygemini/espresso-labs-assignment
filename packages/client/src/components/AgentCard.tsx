import styled from "@emotion/styled";
import { FC } from "react";
import { Agent } from "../__generated__/types";
import agentIconSvg from "../assets/SVG/agent-icon.svg";
import emailIconSvg from "../assets/SVG/email-icon.svg";
import { useNavigate } from "react-router-dom";
import { routePath } from "../routes/routeUtils.ts";

const AgentCardStyle = styled.div`
  background: var(--lightest);
  padding: 2em;
  color: var(--darkest);
  border-radius: 0.25em;
  display: flex;
  gap: 1em;
  cursor: pointer;

  &:hover {
    background-color: var(--lighter);
  }

  &:active {
    box-shadow: 0 0 0.15em 0.25em inset rgba(0, 0, 0, 0.15);
  }

  > div:last-child {
    flex-grow: 1;
  }

  img.agent {
    width: 3em;
    height: 3em;
    opacity: 0.8;
  }

  img.email {
    width: 0.75em;
    height: 0.75em;
  }
`;

interface Props {
  agent: Agent;
}

export const AgentCard: FC<Props> = ({ agent }) => {
  const navigate = useNavigate();
  return (
    <AgentCardStyle onClick={() => navigate(routePath.agent(agent.id))}>
      <div>
        <img className="agent" alt={agent.id} src={agentIconSvg} />
      </div>
      <div>
        <div>
          {agent.firstName} {agent.lastName}
        </div>
        {agent.email && (
          <div>
            <img className="email" src={emailIconSvg} alt="email" />{" "}
            {agent.email}
          </div>
        )}
      </div>
    </AgentCardStyle>
  );
};
