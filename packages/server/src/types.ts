import type { BaseContext } from "@apollo/server";

interface AuthN {}
interface AuthX {}

export interface ServerContext extends BaseContext {
  authX: AuthX;
  authN: AuthN;
  headers: Headers;
}
