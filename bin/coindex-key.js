import { Command } from "commander";
import { key } from "../commands/key.js";

const program = new Command();

program
  .command("set")
  .description("Set API Key -> Get at https://www.coinapi.io")
  .action(key.set);

program.command("show").description("Show API Key").action(key.show);

program.command("delete").description("Delete API Key").action(key.delete);

program.parse(process.argv);
