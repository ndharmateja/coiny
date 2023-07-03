import { Command } from "commander";
import { key } from "../handlers/key-handler.js";

const program = new Command();

program
  .command("set")
  .description("Set API Key -> Get at https://www.coinapi.io")
  .action(key.set);

program.command("show").description("Show API Key").action(key.show);

program.command("remove").description("Remove API Key").action(key.remove);

program.parse(process.argv);
