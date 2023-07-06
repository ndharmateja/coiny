/**
 *
 * @param {*} priceString AED 123,45.6
 * @returns 12345.6
 */
export const parsePrice = (priceString) => {
  const spaceIndex = priceString.indexOf(" ");
  let priceNumberString = priceString.substring(spaceIndex + 1);
  priceNumberString = removeCharFromString(priceNumberString, ",");
  return parseFloat(priceNumberString);
};

/**
 *
 * @param {*} priceString AED 123,45.6
 * @returns AED
 */
export const parseCurrSymbol = (priceString) => {
  const spaceIndex = priceString.indexOf(" ");
  return priceString.substring(0, spaceIndex);
};

/**
 *
 * @param {*} marketCap AED 587.46 B
 * @returns 587.46
 */
export const parseMarketCap = (marketCap) => {
  const spaceIndex = marketCap.indexOf(" ");
  let marketCapNumberString = marketCap.substring(
    spaceIndex + 1,
    marketCap.length - 2
  );
  marketCapNumberString = removeCharFromString(marketCapNumberString, ",");
  return parseFloat(marketCapNumberString);
};

const removeCharFromString = (str, char) => str.split(char).join("");
