export class CoinData {
  constructor(
    coinCode,
    coinPrice,
    marketCapBillions,
    changePercent24Hours,
    currency,
    fullName
  ) {
    this.coinCode = coinCode;
    this.coinPrice = coinPrice;
    this.marketCapBillions = marketCapBillions;
    this.changePercent24Hours = changePercent24Hours;
    this.currency = currency;
    this.fullName = fullName;
  }

  getFormattedCoinPrice() {
    return `${this.currency.currSymbol} ${this.coinPrice.toFixed(2)}`;
  }

  getFormattedMarketCap() {
    return `${this.currency.currSymbol} ${this.coinPrice.toFixed(2)} B`;
  }
}
