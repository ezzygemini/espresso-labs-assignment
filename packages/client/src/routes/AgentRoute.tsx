import { PageLayout } from "../components/PageLayout.tsx";
import { FC, useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAgents } from "../hooks/agents/useAgents.ts";
import agentIconSvg from "../assets/SVG/agent-icon.svg";
import styled from "@emotion/styled";
import { Agent, AgentStatus } from "../__generated__/types.ts";
import { AgentModalForm } from "../components/AgentModalForm.tsx";
import { routePath } from "./routeUtils.ts";
import { responsive } from "../utils/css/responsive.ts";

const EditButton = styled.button`
  margin-top: 2em;
`;

const CancelButton = styled.button`
  margin-left: 1em;
  opacity: 0.5;
`;

const AgentCardStyle = styled.div`
  color: var(--darkest);
  background-color: var(--lightest);
  padding: 2em;
  display: flex;
  gap: 2em;
  flex-direction: column;

  ${responsive.sm`
    flex-direction: row;
  `}

  > div:last-child {
    flex-grow: 1;
  }

  img {
    width: 5em;
    height: 5em;
  }

  dl {
    padding: 0;
    margin: 0;
    width: 100%;

    dd {
      margin-left: 1em;
      font-weight: bold;
      margin-bottom: 1em;
    }
  }
`;

export const AgentRoute: FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { id } = useParams();
  const { loadAgent, loadAgentInfo, editAgent } = useAgents();
  const navigate = useNavigate();
  const { error, data, loading } = loadAgentInfo;

  useEffect(() => {
    console.debug("id", id);
    if (id) {
      void loadAgent({ variables: { id } });
    }
  }, [id, loadAgent]);

  const editAgentHandler = useCallback(
    async (agent: Partial<Agent>) => {
      if (data?.agent?.id) {
        const { id } = data.agent;
        const {
          firstName,
          lastName,
          status = AgentStatus.Active,
          email,
        } = agent;
        await editAgent({
          variables: { input: { id, firstName, lastName, status, email } },
        });
        navigate(routePath.agents());
      }
    },
    [data?.agent?.id, editAgent, navigate],
  );

  if (error || loading || !data?.agent) return null;

  const { agent } = data;
  return (
    <>
      <PageLayout title="Agent">
        <AgentCardStyle>
          <div>
            <img src={agentIconSvg} alt={agent.id} />
          </div>
          <div>
            <dl>
              <dt>Name:</dt>
              <dd>
                {agent.firstName} {agent.lastName}
              </dd>
              <dt>Email:</dt>
              <dd>{agent.email}</dd>
              <dt>Status:</dt>
              <dd>
                {agent.status === AgentStatus.Active ? "active" : "inactive"}
              </dd>
            </dl>
          </div>
        </AgentCardStyle>
        <EditButton className="edit" onClick={() => setOpen(true)}>
          Edit Agent
        </EditButton>
        <CancelButton
          className="cancel"
          onClick={() => navigate(routePath.agents())}
        >
          Go Back
        </CancelButton>
        {open && <AgentModalForm agent={agent} onSubmit={editAgentHandler} />}
      </PageLayout>
    </>
  );
};
