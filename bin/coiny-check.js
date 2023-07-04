import { Command } from "commander";
import { check } from "../handlers/check-handler.js";

const program = new Command();

program
  .command("price")
  .description("Check price of coins")
  .option(
    "--coin <type>",
    "Add specific coin types (comma separated)",
    "BTC,ETH,BNB,DOGE,USDT"
  )
  .option("--curr <currency>", "Change the currency", "USD")
  .action((cmd) => check.price(cmd));

program.parse(process.argv);
