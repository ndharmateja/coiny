export const formatStrings2dList = (tableData) => {
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
  const divisionPoint = "+";
  const [headings, ...rows] = tableData;
  outputString = `${outputString}${divisionPoint}`;
  outputString += colMaxLengths
    .map((colMaxLength) => new Array(colMaxLength + 2).fill("-").join(""))
    .join(divisionPoint);
  outputString = `${outputString}${divisionPoint}\n`;

  // Headings
  outputString = `${outputString}|`;
  outputString += headings
    .map((heading, i) => ` ${alignStringCenter(heading, colMaxLengths[i])} `)
    .join("|");
  outputString = `${outputString}|\n`;

  // Lower border of heading
  outputString = `${outputString}${divisionPoint}`;
  outputString += colMaxLengths
    .map((colMaxLength) => new Array(colMaxLength + 2).fill("-").join(""))
    .join(divisionPoint);
  outputString = `${outputString}${divisionPoint}\n`;

  // Each row
  for (const row of rows) {
    outputString = `${outputString}|`;
    outputString += row
      .map((value, i) => ` ${alignStringRight(value, colMaxLengths[i])} `)
      .join("|");
    outputString = `${outputString}|\n`;
  }

  // Lower border of table
  outputString = `${outputString}${divisionPoint}`;
  outputString += colMaxLengths
    .map((colMaxLength) => new Array(colMaxLength + 2).fill("-").join(""))
    .join(divisionPoint);
  outputString = `${outputString}${divisionPoint}\n`;

  return outputString;
};

const alignStringLeft = (str, len) => {
  const padding = len - str.length;
  return padString(str, 0, padding);
};

const alignStringRight = (str, len) => {
  const padding = len - str.length;
  return padString(str, padding, 0);
};

const alignStringCenter = (str, len) => {
  const padding = len - str.length;
  const leftPadding = Math.floor(padding / 2);
  const rightPadding = padding - leftPadding;
  return padString(str, leftPadding, rightPadding);
};

const padString = (str, leftPadding, rightPadding) => {
  let output = str;
  for (let i = 0; i < leftPadding; i++) {
    output = " " + output;
  }
  for (let i = 0; i < rightPadding; i++) {
    output += " ";
  }
  return output;
};
