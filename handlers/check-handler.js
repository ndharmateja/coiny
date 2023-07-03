import { KeyManager } from "../lib/KeyManager.js";
import { CryptoApi } from "../lib/CryptoApi.js";
import colors from "colors";

const getOutputString = (displayData, curr) => {
  let output = "";
  for (const coin in displayData) {
    const data = displayData[coin][curr.toUpperCase()];
    const { PRICE: price } = data;
    output += `Coin: `;
    output += `${coin}`.yellow;
    output += ` | Price: `;
    output += `${price}\n`.green;
  }
  return output;
};

export const check = {
  price: async (cmd) => {
    const keyManager = new KeyManager();

    let key;
    try {
      key = keyManager.getKey();
    } catch (error) {
      console.log(
        "API Key not set. Set API Key using ".red +
          "coiny key set".yellow +
          " and then check prices.".red
      );
      return;
    }

    try {
      const api = new CryptoApi(key);
      const { DISPLAY: displayData } = await api.getPriceData(
        cmd.coin,
        cmd.curr
      );

      const output = getOutputString(displayData, cmd.curr);
      process.stdout.write(output);
    } catch (error) {
      console.log(error.message.red);
      return;
    }
  },
};
