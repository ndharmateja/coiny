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
    const url = `${API_BASE_URL}/pricemultifull?fsyms=${coinOption}&tsyms=${currOption}&api_key=${this.apiKey}`;
    try {
      const { data } = await axios.get(url);
      if (data.Response === "Error") {
        throw new Error(data.Message);
      }

      const { DISPLAY: displayData } = data;
      const output = [];
      for (const coinCode in displayData) {
        const data = displayData[coinCode][currOption];
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

  async getTopCoinsByMarketCap(topLimit, currOption) {
    const url = `${API_BASE_URL}/top/mktcapfull?limit=${topLimit}&tsym=${currOption}&api_key=${this.apiKey}`;
    try {
      const { data } = await axios.get(url);
      if (data.Response === "Error") {
        throw new Error(data.Message);
      }

      const { Data: coinInfoList } = data;
      const output = [];
      for (const coinInfo of coinInfoList) {
        const {
          CoinInfo: { Name: coinCode, FullName: coinFullName },
          DISPLAY: displayData,
        } = coinInfo;
        const coinInfoInCurr = displayData[currOption];
        const {
          PRICE: price,
          MKTCAP: marketCap,
          CHANGEPCT24HOUR: changePercent24Hours,
        } = coinInfoInCurr;
        const coinData = new CoinData(
          coinCode,
          price,
          marketCap,
          changePercent24Hours,
          coinFullName
        );
        output.push(coinData);
      }
      return output;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
