import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomeRoute } from "./routes/HomeRoute";
import { AgentRoute } from "./routes/AgentRoute";
import { AgentsRoute } from "./routes/AgentsRoute";
import { routePaths } from "./routes/routeUtils";
import { AgentsProvider } from "./hooks/agents/AgentsProvider";
import { ApolloProvider } from "./providers/apollo/ApolloProvider";

const App = () => (
  <ApolloProvider>
    <AgentsProvider>
      <BrowserRouter>
        <Routes>
          <Route path={routePaths.agent} element={<AgentRoute />} />
          <Route path={routePaths.agents} element={<AgentsRoute />} />
          <Route index path={routePaths.home} element={<HomeRoute />} />
        </Routes>
      </BrowserRouter>
    </AgentsProvider>
  </ApolloProvider>
);

export default App;
