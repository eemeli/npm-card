#!/usr/bin/env node

import { writeFileSync } from "fs";
import { resolve } from "path";

import myPkg from "../package.json" assert { type: "json" };
import { makeCard } from "./make-card.js";

const card = makeCard(myPkg);
const path = resolve("dist", "card.txt");
writeFileSync(path, card);
