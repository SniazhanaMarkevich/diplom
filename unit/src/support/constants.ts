export const LOGIN_LENGTH_TEXT_MESSAGE_ERROR = 'The login length must be more than 5 characters but less than 12 characters';

export const  EMAIL_LENGTH_TEXT_MESSAGE_ERROR = 'The email length must be more than 10 characters but less than 30 characters';

export const SPECIAL_CHARACTER_TEXT_MESSAGE_ERROR = 'Login includes special character';

export const EMAIL_SPECIAL_CHARACTER_TEXT_MESSAGE_ERROR = 'Email should include special character';

export const STARTS_WITH_A_NUMBER_TEXT_MESSAGE_ERROR = 'Login starts with a number';

export const STARTS_WITH_A_NUMBER_PHONE_TEXT_MESSAGE_ERROR = 'Phone number should start with a number';

export const PHONE_NUMBER_LENGTH_TEXT_MESSAGE_ERROR = 'Phone number is not correct, please provide a correct one';

export const firstNumberInLogin = '1' || '2' || '3' || '4' || '5' || '6' || '7' || '8' || '9' || '0';

export const login = new Map <string, [string, string]>([
  ['name with 9 letters', ['Sniazhana', 'Sniazhana']],
  ['name with 5 letters', ['Sneza', 'Sneza']],
  ['name with 12 letters', ['MArkevichSnN', 'MArkevichSnN']],
  ['name with the special character in the middle', ['MArke$vich', 'MArke$vich']],
  ['name with the number in the middle', ['MArke1vich', 'MArke1vich']],
  ['name with the number in the end', ['MArkevich1', 'MArkevich1']]
]);

export const loginError = new Map <string, [string, string]>([
  ['name with 3 letters', ['SNN', LOGIN_LENGTH_TEXT_MESSAGE_ERROR]],
  ['name with more than 12 letters', ['Sniazhana_MArkevich_Nikolaevna', LOGIN_LENGTH_TEXT_MESSAGE_ERROR]],
  ['name with the first number', ['1Sniazhana', STARTS_WITH_A_NUMBER_TEXT_MESSAGE_ERROR]],
  ['name with ! special character', ['Snia!hana', SPECIAL_CHARACTER_TEXT_MESSAGE_ERROR]],
  ['name with @ special character', ['Sniaha@na', SPECIAL_CHARACTER_TEXT_MESSAGE_ERROR]],
  ['name with # special character', ['Sniah#na', SPECIAL_CHARACTER_TEXT_MESSAGE_ERROR]],
  ['name with ; special character', ['Sniahana;', SPECIAL_CHARACTER_TEXT_MESSAGE_ERROR]]
]);

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

export const phone = new Map <string, [number, number]>([
  ['phone number with 375 starts', [375295476788, 375295476788]],
  ['phone number with 8 starts', [80295476788, 80295476788]]
]);

export const phoneError = new Map <string, [number, string]>([
  ['phone number with 6 numbers', [706563, PHONE_NUMBER_LENGTH_TEXT_MESSAGE_ERROR]],
  ['phone number with 13 numbers', [1234567891012, PHONE_NUMBER_LENGTH_TEXT_MESSAGE_ERROR]]
]);