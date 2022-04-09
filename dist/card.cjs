#!/usr/bin/env node

const { readFileSync } = require("fs");
const { resolve } = require("path");

const path = resolve(__dirname, "card.txt");
const card = readFileSync(path, "utf8");
console.log(card);
