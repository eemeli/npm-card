#!/usr/bin/env node

import myPkg from "../package.json" assert { type: "json" };
import { makeCard } from "./make-card.js";

console.log(makeCard(myPkg));
