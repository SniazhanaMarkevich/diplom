import { RegistrationForm } from "../src/registrationForm";
import { email, emailError } from "../src/support/constantsForEmail";
import { login, loginError } from "../src/support/constantsForLogin";
import { phone, phoneError } from "../src/support/constantsForPhone";

let registration: RegistrationForm;

describe('Registration form test', () => {
  beforeEach(() => {
    registration = new RegistrationForm();
  });

  describe('Login filling test', () => {
    login.forEach((value, key) => {
      test(`Should correctly enter ${key}`, () => {
        expect(registration.login(value[0])).toStrictEqual(value[1]);
      });
    })

    loginError.forEach((value, key) => {
      test(`Should correctly enter ${key}`, () => {
        expect(() => registration.login(value[0])).toThrow(Error(value[1]));
      });
    });
  });

  describe('Email filling test', () => {
    email.forEach((value, key) => {
      test(`Should correctly enter ${key}`, () => {
        expect(registration.email(value[0])).toStrictEqual(value[1]);
      });
    })
  
    emailError.forEach((value, key) => {
     test(`Should correctly enter ${key}`, () => {
       expect(() => registration.email(value[0])).toThrow(Error(value[1]));
      }); 
    });
  });
  
  describe('Phone number filling test', () => {
    phone.forEach((value, key) => {
      test(`Should correctly enter ${key}`, () => {
        expect(registration.phone(value[0])).toStrictEqual(value[1]);
      });
    });
    
    phoneError.forEach((value, key) => {
      test(`Should correctly enter ${key}`, () => {
        expect(() => registration.phone(value[0])).toThrow(Error(value[1]));
      }); 
    });
  });
})
