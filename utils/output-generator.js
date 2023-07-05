export const printCoinDataList = (coinDataList) => {
  const stringsTable = [["#", "Coin", "Price"]].concat(
    coinDataList.map((coinData, i) => [
      `${i + 1}.`,
      coinData.coinCode,
      coinData.coinPrice,
    ])
  );
  print2dStringsListFormatted(stringsTable);
};

const print2dStringsListFormatted = (tableData) => {
  // Get max length of string in each column
  const numCols = tableData[0].length;
  const colMaxLengths = new Array(numCols).fill(0);
  for (const row of tableData) {
    for (const i in row) {
      const value = row[i];
      if (value.length > colMaxLengths[i]) {
        colMaxLengths[i] = value.length;
      }
    }
  }

  // Generate the output table string
  let outputString = "";

  // Upper border of heading
  const [headings, ...rows] = tableData;
  outputString = `${outputString}*`;
  outputString += colMaxLengths
    .map((colMaxLength) => new Array(colMaxLength + 2).fill("-").join(""))
    .join("*");
  outputString = `${outputString}*\n`;

  // Headings
  outputString = `${outputString}|`;
  outputString += headings
    .map((heading, i) => ` ${alignString(heading, colMaxLengths[i])} `)
    .join("|");
  outputString = `${outputString}|\n`;

  // Lower border of heading
  outputString = `${outputString}*`;
  outputString += colMaxLengths
    .map((colMaxLength) => new Array(colMaxLength + 2).fill("-").join(""))
    .join("*");
  outputString = `${outputString}*\n`;

  // Each row
  for (const row of rows) {
    outputString = `${outputString}|`;
    outputString += row
      .map((value, i) => ` ${alignString(value, colMaxLengths[i])} `)
      .join("|");
    outputString = `${outputString}|\n`;
  }

  // Lower border of table
  outputString = `${outputString}*`;
  outputString += colMaxLengths
    .map((colMaxLength) => new Array(colMaxLength + 2).fill("-").join(""))
    .join("*");
  outputString = `${outputString}*\n`;

  // Print output to console without new line
  process.stdout.write(outputString);
};

const alignString = (str, len) => {
  let output = str;
  for (let i = 0; i < len - str.length; i++) {
    output += " ";
  }
  return output;
};
