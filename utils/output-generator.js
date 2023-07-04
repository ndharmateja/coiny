export const getOutputString = (coinDataList) => {
  let output = "Prices List:\n";
  for (const coinData of coinDataList) {
    output += `Coin: `;
    output += `${coinData.coinCode}`.yellow;
    output += ` | Price: `;
    output += `${coinData.coinPrice}\n`.green;
  }
  return output;
};
