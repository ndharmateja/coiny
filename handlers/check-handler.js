import { KeyManager } from "../lib/KeyManager.js";
import { CryptoApi } from "../lib/CryptoApi.js";
import colors from "colors";
import { validateCurrency } from "../utils/validation.js";

const getOutputString = (coinDataList) => {
  let output = "Prices List:\n";
  for (const coinData of coinDataList) {
    output += `Coin: `;
    output += `${coinData.coinCode}`.yellow;
    output += ` | Price: `;
    output += `${coinData.coinPrice}\n`.green;
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

    // If not valid currency
    let curr;
    try {
      curr = validateCurrency(cmd.curr);
    } catch (error) {
      console.log(error.message.red);
      return;
    }

    try {
      const api = new CryptoApi(key);

      // CoinData[]
      const coinDataList = await api.getPriceData(cmd.coin, curr);
      const output = getOutputString(coinDataList);

      // Print output to console without new line
      process.stdout.write(output);
    } catch (error) {
      console.log(error.message.red);
      return;
    }
  },
};
