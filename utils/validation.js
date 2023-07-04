import { CURRENCY_CODE_TO_NAME } from "./constants.js";

export const isRequired = (field) => (field.trim() === "" ? false : true);
export const validateCurrency = (curr) => {
  const validatedCurr = curr.toUpperCase();
  if (!(validatedCurr in CURRENCY_CODE_TO_NAME)) {
    throw new Error(`Invalid currency: ${curr}`);
  }
  return validatedCurr;
};
