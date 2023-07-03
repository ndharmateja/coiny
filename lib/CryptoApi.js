import axios from "axios";
import { API_BASE_URL } from "../utils/constants.js";

export class CryptoApi {
  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  async getPriceData(coinOption, currOption) {
    const url = `${API_BASE_URL}?fsyms=${coinOption}&tsyms=${currOption}&api_key=${this.apiKey}`;
    try {
      const { data } = await axios.get(url);
      if (data.Response === "Error") {
        throw new Error(data.Message);
      }
      return data;
    } catch (error) {
      if (error.response.status === 404) {
        throw new Error("Your API is not responding");
      } else if (error.response.status === 501) {
        throw new Error("Server error");
      } else {
        throw new Error("Something went wrong");
      }
    }
  }
}
