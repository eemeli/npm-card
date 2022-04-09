#!/usr/bin/env node

import { chmodSync, mkdirSync, writeFileSync } from "fs";
import { resolve } from "path";

import myPkg from "../package.json" assert { type: "json" };
import { makeCard } from "./make-card.js";

const card = makeCard(myPkg);
const src = `\
#!/usr/bin/env node
console.log(
  ${JSON.stringify(card).replace(/\\n/g, '\\n" +\n  "')}
);
`;

mkdirSync("dist", { recursive: true });
const path = resolve("dist", "card.js");
writeFileSync(path, src);
chmodSync(path, 0o775);
