#!/usr/bin/env node

"use strict";

const makeCard = require("./make-card");
const myPkg = require("../package.json");

console.log(makeCard(myPkg));
