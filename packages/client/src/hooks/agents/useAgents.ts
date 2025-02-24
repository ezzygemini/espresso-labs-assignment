import { useContext } from "react";
import { agentsContext } from "./agentsContext.ts";

export const useAgents = () => {
  const context = useContext(agentsContext);
  if (!context.initialized)
    throw "Agents context must be included inside an AgentsProvider";
  return context;
};
