import axios from "axios";
import { API_BASE_URL } from "../utils/constants.js";
import { CoinData } from "./CoinData.js";

export class CryptoApi {
  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  /**
   *
   * @param {*} coinOption
   * @param {*} currOption
   * @returns CoinData[] - list of CoinData objects
   */
  async getPriceData(coinOption, currOption) {
    const url = `${API_BASE_URL}?fsyms=${coinOption}&tsyms=${currOption}&api_key=${this.apiKey}`;
    try {
      const { data } = await axios.get(url);
      if (data.Response === "Error") {
        throw new Error(data.Message);
      }

      const { DISPLAY: displayData } = data;
      const output = [];
      for (const coinCode in displayData) {
        const data = displayData[coinCode][currOption.toUpperCase()];
        const {
          PRICE: price,
          MKTCAP: marketCap,
          CHANGEPCT24HOUR: changePercent24Hours,
        } = data;
        const coinData = new CoinData(
          coinCode,
          price,
          marketCap,
          changePercent24Hours
        );
        output.push(coinData);
      }
      return output;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
