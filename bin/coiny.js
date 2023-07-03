#!/usr/bin/env node

// Imports
import { Command } from "commander";
import { createRequire } from "module";
import { GET_KEY_URL } from "../utils/constants.js";
const require = createRequire(import.meta.url);
const pkg = require("../package.json");

const program = new Command();

program
  .version(pkg.version)
  .command("key", `Manage API key -> Get at ${GET_KEY_URL}`)
  .command("check", "Check cryptocurrency coins prices")
  .parse(process.argv);
