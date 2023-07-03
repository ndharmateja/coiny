import { Command } from "commander";

const program = new Command();

program
  .command("set")
  .description("Set API Key -> Get at https://www.coinapi.io")
  .action(() => console.log("hello from set"));

program
  .command("show")
  .description("Show API Key")
  .action(() => console.log("hello from show"));

program
  .command("delete")
  .description("Delete API Key")
  .action(() => console.log("hello from delete"));

program.parse(process.argv);
