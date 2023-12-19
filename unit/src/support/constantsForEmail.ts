import { EMAIL_LENGTH_TEXT_MESSAGE_ERROR, EMAIL_SPECIAL_CHARACTER_TEXT_MESSAGE_ERROR } from "./messageError";

export const email = new Map <string, [string, string]>([
  ['email with 21 letters', ['sneganamark@gmail.com','sneganamark@gmail.com']],
  ['email with 12 letters', ['fk@gmail.com','fk@gmail.com']],
  ['email with 29 letters', ['ssnnegaannaamaarrkk@gmail.com','ssnnegaannaamaarrkk@gmail.com']]
]);

export const emailError = new Map <string, [string, string]>([
  ['email without @ special character', ['sneganamarkgmail.com', EMAIL_SPECIAL_CHARACTER_TEXT_MESSAGE_ERROR]],
  ['email without .com', ['sneganamark@gmailcom', EMAIL_SPECIAL_CHARACTER_TEXT_MESSAGE_ERROR]],
  ['email without @ and .com', ['sneganamarkgmailcom', EMAIL_SPECIAL_CHARACTER_TEXT_MESSAGE_ERROR]],
  ['email with 10 letters', ['@gmail.com',EMAIL_LENGTH_TEXT_MESSAGE_ERROR]],
  ['email with 38 letters', ['SniazhanaMarkevichNikolaevna@gmail.com', EMAIL_LENGTH_TEXT_MESSAGE_ERROR]]
]);
