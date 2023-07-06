import axios from "axios";
import { API_BASE_URL } from "../utils/constants.js";
import { CoinData } from "./CoinData.js";

export class CryptoApi {
  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  /**
   *
   * @param {*} coinCodeList
   * @param {*} currCode
   * @returns CoinData[] - list of CoinData objects
   */
  async getPriceData(coinCodeList, currCode) {
    const url = `${API_BASE_URL}/pricemultifull?fsyms=${coinCodeList}&tsyms=${currCode}&api_key=${this.apiKey}`;
    try {
      const { data } = await axios.get(url);
      if (data.Response === "Error") {
        throw new Error(data.Message);
      }

      const { DISPLAY: displayData } = data;
      const output = [];
      for (const coinCode in displayData) {
        const data = displayData[coinCode][currCode];
        const {
          PRICE: priceString,
          MKTCAP: marketCapString,
          CHANGEPCT24HOUR: changePercent24HoursString,
        } = data;

        const coinData = new CoinData(
          coinCode,
          currCode,
          priceString,
          marketCapString,
          changePercent24HoursString
        );
        output.push(coinData);
      }
      console.log(JSON.stringify(output, null, 2));
      return output;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getTopCoinsByMarketCap(topLimit, currCode) {
    const url = `${API_BASE_URL}/top/mktcapfull?limit=${topLimit}&tsym=${currCode}&api_key=${this.apiKey}`;
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
        const coinInfoInCurr = displayData[currCode];
        const {
          PRICE: priceString,
          MKTCAP: marketCapString,
          CHANGEPCT24HOUR: changePercent24HoursString,
        } = coinInfoInCurr;

        const coinData = new CoinData(
          coinCode,
          currCode,
          priceString,
          marketCapString,
          changePercent24HoursString,
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
