import { KeyManager } from "../lib/KeyManager.js";
import inquirer from "inquirer";
import colors from "colors";
const keyManager = new KeyManager();

async function takeKeyInput() {
  let input = await inquirer.prompt([
    {
      type: "input",
      name: "key",
      message: "(https://www.coinapi.io) ".yellow + "Enter API Key:".green,
    },
  ]);

  // While key is empty, show error message and take input again
  do {
    console.log("Key cannot be empty.".red);
    input = await inquirer.prompt([
      {
        type: "input",
        name: "key",
        message: "(https://www.coinapi.io) ".yellow + "Enter API Key:".green,
      },
    ]);
  } while (!input.key.trim());

  // Return the input
  return input.key.trim();
}

export const key = {
  set: async () => {
    const key = await takeKeyInput();

    // Set key
    keyManager.setKey(key);
    console.log("Successfully set the key.".green);
  },
  show: () => {
    try {
      // Try to fetch the key
      const key = keyManager.getKey();
      console.log("API Key: ".blue + key.green);
    } catch (error) {
      // If error show error message
      console.log(error.message.red);
    }
  },
  remove: () => {
    try {
      // Try to remove the key
      keyManager.deleteKey();
      console.log("Successfully remove the key.".green);
    } catch (error) {
      // If error show error message
      console.log(error.message.red);
    }
  },
};
