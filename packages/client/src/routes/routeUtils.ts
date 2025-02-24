export const routePaths = {
  home: "/",
  agents: "/agents",
  agent: "/agent/:id",
};

export const routePath = {
  home() {
    return routePaths.home;
  },
  agents() {
    return routePaths.agents;
  },
  agent(id: string) {
    return routePaths.agent.replace(":id", id);
  },
};
