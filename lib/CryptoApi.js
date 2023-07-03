import axios from "axios";

export class CryptoApi {
  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  async getPriceData(coinOption, currOption) {
    const url = `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${coinOption}&tsyms=${currOption}&api_key=${this.apiKey}`;
    const { data } = await axios.get(url);

    if (data.Response === "Error") {
      throw new Error(data.Message);
    }

    return data;
  }
}
