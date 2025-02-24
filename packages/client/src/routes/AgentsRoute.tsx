import { PageLayout } from "../components/PageLayout";
import { useAgents } from "../hooks/agents/useAgents";
import { AgentCard } from "../components/AgentCard";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { routePath } from "./routeUtils";
import { AgentModalForm } from "../components/AgentModalForm";
import { Agent } from "../__generated__/types";
import styled from "@emotion/styled";
import { responsive } from "../utils/css/responsive.ts";

const AgentsCardsStyle = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 2em;
  justify-content: center;
  margin-bottom: 2em;
  flex-wrap: wrap;

  > div {
    width: 100%;
  }

  ${responsive.sm`
    > div {
      width: 45%;
    }
  `}

  ${responsive.md`
    > div {
      width: 30%;
    }
  `}

  ${responsive.lg`
    > div {
      width: 20%;
    }
  `}
`;

export const AgentsRoute = () => {
  const [open, setOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const { loadAgents, loadAgentsInfo, addAgent } = useAgents();

  // Load the agents as soon as the component mounts.
  useEffect(() => {
    void loadAgents({
      fetchPolicy: "network-only",
    });
  }, [loadAgents]);

  const agents = useMemo<Agent[]>(() => {
    if (loadAgentsInfo.error || loadAgentsInfo.loading) return [];
    return (loadAgentsInfo.data?.agents as Agent[]) ?? [];
  }, [loadAgentsInfo]);

  const newAgentHandler = async (agentData: Partial<Agent>) => {
    const { data, errors } = await addAgent({
      variables: { input: agentData as Agent },
    });
    if (!errors && data) {
      navigate(routePath.agent(data.addAgent.id));
    } else {
      console.error(errors);
    }
  };

  return (
    <>
      <PageLayout title="Agents">
        <AgentsCardsStyle>
          {agents.map((agent) => (
            <AgentCard agent={agent} />
          ))}
        </AgentsCardsStyle>
        <button onClick={() => setOpen(true)}>New Agent</button>
      </PageLayout>
      {open && <AgentModalForm onSubmit={newAgentHandler} />}
    </>
  );
};
