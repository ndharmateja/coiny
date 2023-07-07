import { CURRENCY_CODE_TO_SYMBOL } from "./constants.js";

export const isRequired = (field) => (field.trim() === "" ? false : true);
export const validateCurrency = (curr) => {
  const validatedCurr = curr.toUpperCase();
  if (!(validatedCurr in CURRENCY_CODE_TO_SYMBOL)) {
    throw new Error(`Invalid currency: ${curr}`);
  }
  return validatedCurr;
};
