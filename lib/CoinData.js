import { parseMarketCap, parseCurrSymbol, parsePrice } from "../utils/parse.js";
import { Currency } from "./Currency.js";

export class CoinData {
  /**
   *
   * @param {*} coinCode "BTC"
   * @param {*} currCode "USD"
   * @param {*} priceString "$ 30,163.2"
   * @param {*} marketCapString "$ 585.83 B"
   * @param {*} changePercent24HoursString "2.30"
   * @param {*} fullName "Bitcoin"
   */
  constructor(
    coinCode,
    currCode,
    priceString,
    marketCapString,
    changePercent24HoursString,
    fullName
  ) {
    const marketCap = parseMarketCap(marketCapString);
    const currSymbol = parseCurrSymbol(priceString);
    const coinPrice = parsePrice(priceString);
    const changePercent24Hours = parseFloat(changePercent24HoursString);
    const currency = new Currency(currCode, currSymbol);

    this.coinCode = coinCode;
    this.coinPrice = coinPrice;
    this.marketCapBillions = marketCap;
    this.changePercent24Hours = changePercent24Hours;
    this.currency = currency;
    this.fullName = fullName;
  }

  getFormattedCoinPrice() {
    return `${this.currency.currSymbol} ${this.coinPrice.toLocaleString(
      undefined,
      { minimumFractionDigits: 2, maximumFractionDigits: 2 }
    )}`;
  }

  getFormattedMarketCap() {
    return `${this.currency.currSymbol} ${this.marketCapBillions.toLocaleString(
      undefined,
      { minimumFractionDigits: 2, maximumFractionDigits: 2 }
    )} B`;
  }

  getFormattedChangePercent() {
    return `${this.changePercent24Hours.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })} %`;
  }
}
