export class CoinData {
  constructor(coinCode, coinPrice, marketCap, changePercent24Hours) {
    this.coinCode = coinCode;
    this.coinPrice = coinPrice;
    this.marketCap = marketCap;
    this.changePercent24Hours = changePercent24Hours;
  }
}
