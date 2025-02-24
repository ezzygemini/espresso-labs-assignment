import { css } from "@emotion/react";

const devices = {
  xs: 400 / 16 + "em",
  sm: 600 / 16 + "em",
  md: 900 / 16 + "em",
  lg: 1280 / 16 + "em",
  xl: 1440 / 16 + "em",
  xxl: 1920 / 16 + "em",
} as const;

export const responsive = {
  xs: (...args: Parameters<typeof css>) => css`
    @media (min-width: ${devices.xs}) {
      ${css(...args)};
    }
  `,
  sm: (...args: Parameters<typeof css>) => css`
    @media (min-width: ${devices.sm}) {
      ${css(...args)};
    }
  `,
  md: (...args: Parameters<typeof css>) => css`
    @media (min-width: ${devices.md}) {
      ${css(...args)};
    }
  `,
  lg: (...args: Parameters<typeof css>) => css`
    @media (min-width: ${devices.lg}) {
      ${css(...args)};
    }
  `,
  xl: (...args: Parameters<typeof css>) => css`
    @media (min-width: ${devices.xl}) {
      ${css(...args)};
    }
  `,
  xxl: (...args: Parameters<typeof css>) => css`
    @media (min-width: ${devices.xxl}) {
      ${css(...args)};
    }
  `,
};
