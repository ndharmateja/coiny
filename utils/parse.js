export const splitString = (str) => {
  // remove spaces
  str = str.split(" ").join("");
  return str.split(",");
};
