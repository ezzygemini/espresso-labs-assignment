import { readFileSync } from "fs";
import gql from "graphql-tag";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const fileName = fileURLToPath(import.meta.url);
const dirName = dirname(fileName);

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
export const typeDefs = gql(
  readFileSync(join(dirName, "./schema.graphql"), "utf8"),
);
