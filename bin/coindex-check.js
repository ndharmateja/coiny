import { Command } from "commander";
import { check } from "../handlers/check-handler.js";

const program = new Command();

program
  .command("price")
  .description("Check price of coins")
  .action(check.price);

program.parse(process.argv);
