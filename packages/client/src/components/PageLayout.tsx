import styled from "@emotion/styled";
import type { FC, PropsWithChildren } from "react";
import { responsive } from "../utils/css/responsive";
import { SerializedStyles } from "@emotion/react";

interface StyleProps {
  backgroundImage?: string;
  pageStyles?: string | SerializedStyles;
  titleStyles?: string | SerializedStyles;
  containerStyles?: string | SerializedStyles;
}

const PageLayoutStyle = styled.div<StyleProps>`
  background-color: var(--darkest);
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${({ backgroundImage }) =>
    backgroundImage
      ? `url(${backgroundImage})`
      : "repeating-radial-gradient( circle at 100% 100%, transparent 0, var(--darkest) 10px ), repeating-linear-gradient( rgba(var(--darkest-rgb), 0.5), var(--darker) )"};
  background-size: cover;
  height: 100%;
  min-height: 100vh;
  color: var(--darkest);
  padding: 1em;

  ${({ pageStyles }) => pageStyles ?? ""}

  h1 {
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.5);
    font-weight: normal;
    transition: letter-spacing 100ms ease;
    margin-bottom: 1em;
    ${responsive.sm`
      letter-spacing: 1em;    
    `}

    ${({ titleStyles }) => titleStyles ?? ""}
  }

  .container {
    color: var(--lightest);
    background-color: rgba(var(--darkest-rgb), 0.5);
    padding: 2em;
    border-radius: 0.5em;

    ${({ containerStyles }) => containerStyles ?? ""}
  }
`;

interface Props extends StyleProps {
  title: string;
}

export const PageLayout: FC<PropsWithChildren<Props>> = ({
  children,
  title,
  ...otherStyleProps
}) => {
  return (
    <PageLayoutStyle {...otherStyleProps}>
      {title && <h1>{title}</h1>}
      <div className="container">{children}</div>
    </PageLayoutStyle>
  );
};
