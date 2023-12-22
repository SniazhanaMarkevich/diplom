import { 
  EMAIL_LENGTH_TEXT_MESSAGE_ERROR, 
  EMAIL_SPECIAL_CHARACTER_TEXT_MESSAGE_ERROR, 
  LOGIN_LENGTH_TEXT_MESSAGE_ERROR, 
  PHONE_NUMBER_LENGTH_TEXT_MESSAGE_ERROR, 
  SPECIAL_CHARACTER_TEXT_MESSAGE_ERROR, 
  STARTS_WITH_A_NUMBER_TEXT_MESSAGE_ERROR 
} from './support/messageError';
import { 
  firstNumberInLogin, 
  maxLengthEmailText, 
  maxLengthLoginText,
  maxLengthPhoneText, 
  minLengthEmailText, 
  minLengthLoginText, 
  minLengthPhoneText 
} from './support/constants'

export class RegistrationForm {
  constructor () {}

  public login (loginText: string) {
    if (loginText.length < minLengthLoginText || loginText.length > maxLengthLoginText) {
      throw new Error(LOGIN_LENGTH_TEXT_MESSAGE_ERROR);
    }

    if (loginText.startsWith(firstNumberInLogin)) {
      throw new Error(STARTS_WITH_A_NUMBER_TEXT_MESSAGE_ERROR);
    }

    if (loginText.includes('!') || loginText.includes('@') || loginText.includes('#') || loginText.includes(';')) {
      throw new Error(SPECIAL_CHARACTER_TEXT_MESSAGE_ERROR);
    }

    return loginText;
  }

  public email (emailText: string) {
    if (!emailText.includes('@') || !emailText.includes('.com')) {
      throw new Error(EMAIL_SPECIAL_CHARACTER_TEXT_MESSAGE_ERROR);
    }

    if (emailText.length < minLengthEmailText || emailText.length > maxLengthEmailText) {
      throw new Error(EMAIL_LENGTH_TEXT_MESSAGE_ERROR);
    }

    return emailText;
  }

  public phone (phoneNumber: number) {
   const phoneNumberStr = phoneNumber.toString();
   
    if (phoneNumberStr.length !== minLengthPhoneText  && phoneNumberStr.length !== maxLengthPhoneText) {
      throw new Error(PHONE_NUMBER_LENGTH_TEXT_MESSAGE_ERROR);
    }

    return phoneNumber;
  }
}
