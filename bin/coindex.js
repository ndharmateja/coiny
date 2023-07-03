#!/usr/bin/env node

// Imports
import { Command } from "commander";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const pkg = require("../package.json");

const program = new Command();

program
  .version(pkg.version)
  .command("key", "Manage API key -> Get at https://www.coinapi.io")
  .parse(process.argv);
