/**
 *
 * @param {*} priceString $ 123,45.6
 * @returns 12345.6
 */
export const parsePrice = (priceString) => {
  let priceNumberString = priceString.substring(2);
  priceNumberString = removeCharFromString(priceNumberString, ",");
  return parseFloat(priceNumberString);
};

/**
 *
 * @param {*} priceString $ 123,45.6
 * @returns $
 */
export const parseCurrSymbol = (priceString) => priceString.at(0);

/**
 *
 * @param {*} marketCap $ 587.46 B
 * @returns 587.46
 */
export const parseMarketCap = (marketCap) => {
  let marketCapNumberString = marketCap.substring(2, marketCap.length - 2);
  marketCapNumberString = removeCharFromString(marketCapNumberString, ",");
  return parseFloat(marketCapNumberString);
};

const removeCharFromString = (str, char) => str.split(char).join("");
