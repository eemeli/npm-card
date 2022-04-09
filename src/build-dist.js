#!/usr/bin/env node
"use strict";

const { chmodSync, mkdirSync, writeFileSync } = require("fs");
const { resolve } = require("path");
const makeCard = require("./make-card");
const myPkg = require("../package.json");

const card = makeCard(myPkg);
const src = `\
#!/usr/bin/env node
"use strict";
console.log(
  ${JSON.stringify(card).replace(/\\n/g, '\\n" +\n  "')}
);
`;

mkdirSync("dist", { recursive: true });
const path = resolve("dist", "card.js");
writeFileSync(path, src);
chmodSync(path, 0o775);
