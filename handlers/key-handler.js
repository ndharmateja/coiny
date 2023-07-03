import { KeyManager } from "../lib/KeyManager.js";
import inquirer from "inquirer";
import colors from "colors";
import { isRequired } from "../utils/validation.js";
import { API_URL } from "../utils/constants.js";
const keyManager = new KeyManager();

async function takeKeyInput() {
  let input = await inquirer.prompt([
    {
      type: "input",
      name: "key",
      message: `(${API_URL}) `.yellow + "Enter API Key:".green,
      validate: isRequired,
    },
  ]);

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
      console.log("Successfully removed the key.".green);
    } catch (error) {
      // If error show error message
      console.log(error.message.red);
    }
  },
};
