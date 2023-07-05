import { KeyManager } from "../lib/KeyManager.js";
import { CryptoApi } from "../lib/CryptoApi.js";
import colors from "colors";
import { validateCurrency } from "../utils/validation.js";
import { printCoinDataList } from "../utils/output-generator.js";
import { DEFAULT_COINS } from "../utils/constants.js";

export const check = {
  price: async (cmd) => {
    const keyManager = new KeyManager();

    if (!cmd.coin) {
      cmd.coin = DEFAULT_COINS;
    }

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
      printCoinDataList(coinDataList);
    } catch (error) {
      console.log(error.message.red);
      return;
    }
  },
};
