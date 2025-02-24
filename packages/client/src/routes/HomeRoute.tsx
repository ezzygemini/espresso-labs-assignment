import { PageLayout } from "../components/PageLayout";
import agentsJpg from "../assets/agents.jpg";
import styled from "@emotion/styled";
import { responsive } from "../utils/css/responsive";
import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import { routePath } from "./routeUtils";

const FormStyle = styled.form`
  display: flex;
  gap: 1em;
  width: 100%;
  justify-content: center;

  > input,
  > button {
    flex: 1;
  }
  ${responsive.md`
    > input,
    > button {
      flex: none;
    }
    
    button {
      padding-left: 2em;
      padding-right: 2em;
    }
  `}

  flex-direction: column;
  ${responsive.sm`
    flex-direction: row;
  `}
`;

const dynamicCentered = css`
  align-content: center;

  ${responsive.sm`
    align-content: unset;
  `}
`;

export const HomeRoute = () => {
  const navigate = useNavigate();

  const goToAgents = () => {
    navigate(routePath.agents());
  };

  return (
    <PageLayout
      title="Welcome"
      backgroundImage={agentsJpg}
      pageStyles={dynamicCentered}
    >
      <FormStyle onSubmit={goToAgents}>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </FormStyle>
    </PageLayout>
  );
};
