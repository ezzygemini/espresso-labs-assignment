import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { loadEnvFile } from "process";

const fileName = fileURLToPath(import.meta.url);
const dirName = dirname(fileName);

loadEnvFile(join(dirName, "./../.env"));
