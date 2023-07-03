import Configstore from "configstore";
import { createRequire } from "module";
import { GET_KEY_URL } from "../utils/constants.js";
const require = createRequire(import.meta.url);
const pkg = require("../package.json");

export class KeyManager {
  constructor() {
    this.conf = new Configstore(pkg.name);
  }

  setKey(key) {
    this.conf.set("apiKey", key);
    return key;
  }

  getKey() {
    const key = this.conf.get("apiKey");

    // If key is not present, throw error
    if (!key) {
      throw new Error(`No API Key Found -> Get at ${GET_KEY_URL}`);
    }

    return key;
  }

  deleteKey() {
    const key = this.conf.get("apiKey");

    // If key is not present, throw error
    if (!key) {
      throw new Error(`No API Key Found -> Get at ${GET_KEY_URL}`);
    }

    this.conf.delete("apiKey");
  }
}
