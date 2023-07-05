import { Command } from "commander";
import { check } from "../handlers/check-handler.js";

const program = new Command();

program
  .command("price")
  .description(
    "Check price of coins. Gets list of top 10 coins by market cap if no options are specified. Use --coin option to get prices for specific coins."
  )
  .option("-t --top <limit>", "Get top coins by market cap (default: 10)")
  .option("--curr <currency>", "Change the currency", "USD")
  .option("--coin <type>", "Specific coin types comma separated")
  .action((cmd) => check.price(cmd));

program.parse(process.argv);
