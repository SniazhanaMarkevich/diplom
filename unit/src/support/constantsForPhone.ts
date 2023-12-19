import { PHONE_NUMBER_LENGTH_TEXT_MESSAGE_ERROR } from "./messageError";

export const phone = new Map <string, [number, number]>([
  ['phone number with 375 starts', [375295476788, 375295476788]],
  ['phone number with 8 starts', [80295476788, 80295476788]]
]);

export const phoneError = new Map <string, [number, string]>([
  ['phone number with 6 numbers', [706563, PHONE_NUMBER_LENGTH_TEXT_MESSAGE_ERROR]],
  ['phone number with 13 numbers', [1234567891012, PHONE_NUMBER_LENGTH_TEXT_MESSAGE_ERROR]]
]);