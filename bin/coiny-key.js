import { Command } from "commander";
import { key } from "../handlers/key-handler.js";
import { GET_KEY_URL } from "../utils/constants.js";

const program = new Command();

program
  .command("set")
  .description(`Set API Key -> Get at ${GET_KEY_URL}`)
  .action(key.set);

program.command("show").description("Show API Key").action(key.show);

program.command("remove").description("Remove API Key").action(key.remove);

program.parse(process.argv);
