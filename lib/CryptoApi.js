import axios from "axios";
import { API_BASE_URL } from "../utils/constants.js";

export class CryptoApi {
  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  async getPriceData(coinOption, currOption) {
    const url = `${API_BASE_URL}?fsyms=${coinOption}&tsyms=${currOption}&api_key=${this.apiKey}`;
    const { data } = await axios.get(url);

    if (data.Response === "Error") {
      throw new Error(data.Message);
    }

    return data;
  }
}
