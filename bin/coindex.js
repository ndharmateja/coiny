#!/usr/bin/env node

// Imports
import { Command } from "commander";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const pkg = require("../package.json");

const program = new Command();

program.version(pkg.version).parse(process.argv);
