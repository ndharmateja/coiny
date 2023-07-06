import { KeyManager } from "../lib/KeyManager.js";
import { CryptoApi } from "../lib/CryptoApi.js";
import colors from "colors";
import { validateCurrency } from "../utils/validation.js";
import { printCoinDataList } from "../utils/output-generator.js";
import { DEFAULT_COINS } from "../utils/constants.js";

const parseOptions = (cmd) => {
  // If not valid currency, validateCurrency throws error
  const curr = validateCurrency(cmd.curr);

  let isTop;
  let topLimit;
  let coin;
  if (cmd.coin && cmd.top) {
    // Both coin and top options are not allowed
    throw new Error("Cannot specify both --top and --coin options");
  } else if (cmd.coin) {
    // If only coin is specified
    isTop = false;
    coin = cmd.coin;
  } else if (cmd.top) {
    // If only top is specified
    isTop = true;
    topLimit = parseInt(cmd.top);
    if (!topLimit) {
      throw new Error(`--top value not a valid integer: ${cmd.top}`);
    }
  } else {
    // If both are not specified, we will get top 10 coins
    isTop = true;
    topLimit = 10;
  }

  return { curr, isTop, topLimit, coin };
};

const getKey = () => {
  const keyManager = new KeyManager();
  let key;
  try {
    key = keyManager.getKey();
  } catch (error) {
    throw new Error(
      "API Key not set. Set API Key using 'coiny key set' and then check prices."
    );
  }
};

export const check = {
  price: async (cmd) => {
    try {
      const apiKey = getKey();
      const { isTop, topLimit, curr, coin } = parseOptions(cmd);
      const api = new CryptoApi(apiKey);

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
