import { 
  LOGIN_LENGTH_TEXT_MESSAGE_ERROR, 
  SPECIAL_CHARACTER_TEXT_MESSAGE_ERROR, 
  STARTS_WITH_A_NUMBER_TEXT_MESSAGE_ERROR 
} from "./messageError";

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
