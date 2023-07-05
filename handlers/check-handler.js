import { KeyManager } from "../lib/KeyManager.js";
import { CryptoApi } from "../lib/CryptoApi.js";
import colors from "colors";
import { validateCurrency } from "../utils/validation.js";
import { printCoinDataList } from "../utils/output-generator.js";
import { DEFAULT_COINS } from "../utils/constants.js";

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

    // Parse options
    let isTop;
    let topLimit;
    let coin;
    if (cmd.coin && cmd.top) {
      // Both coin and top options are not allowed
      console.log("Cannot specify both --top and --coin options".red);
      return;
    } else if (cmd.coin) {
      // If only coin is specified
      isTop = false;
      coin = cmd.coin;
    } else if (cmd.top) {
      // If only top is specified
      isTop = true;
      topLimit = parseInt(cmd.top);
      if (!topLimit) {
        console.log(`--top value not a valid integer: ${cmd.top}`.red);
        return;
      }
    } else {
      // If both are not specified, we will get top 10 coins
      isTop = true;
      topLimit = 10;
    }

    try {
      const api = new CryptoApi(key);

      // CoinData[]
      const coinDataList = isTop
        ? await api.getTopCoinsByMarketCap(topLimit, curr)
        : await api.getPriceData(coin, curr);
      printCoinDataList(coinDataList);
    } catch (error) {
      console.log(error.message.red);
      return;
    }
  },
};
