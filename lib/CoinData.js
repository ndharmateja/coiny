export class CoinData {
  constructor(coinCode, coinPrice, marketCap, changePercent24Hours, fullName) {
    this.coinCode = coinCode;
    this.coinPrice = coinPrice;
    this.marketCap = marketCap;
    this.changePercent24Hours = changePercent24Hours;
    this.fullName = fullName;
  }
}
