import type { ContextFunction } from "@apollo/server";
import { ServerContext } from "./types";

export const context: ContextFunction<
  [Request, Response],
  ServerContext
> = async (req) => {
  // AuthX & AuthN to be handled here.
  const authX = {};
  const authN = {};
  const { headers } = req;
  return { authN, authX, headers };
};
