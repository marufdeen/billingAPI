import { User } from '../models'
import  { validName, validEmail, validPhoneNumber } from './regEx';

// Check if email already in the database
const checkEmail = (email: string) => User.findOne({ email : email.toLowerCase() });

// Check if phoneNumber already in the database
const checkPhoneNumber = (phoneNumber: number) => User.findOne({  phoneNumber }); 
/**
 * @description validate user details
 * @class Validations
 */
class validations {
  /**
   * @description validate user details
   * @function signupValidations
   * @param {object} body
   * @returns {Array} signupErrors
   */
  static async signupValidations(body: any) {
    const { fullName, email, password, confirmPassword } = body; 
    const signupErrors: any = {};
    const emailAlreadyExist = await checkEmail(email); 

    if (!fullName  || !validName.test(fullName)) {
      signupErrors.message =  'First name is required, with at least three alphabetical characters';
    } 
    
    if (!email || !validEmail.test(email)) {
      signupErrors.message = 'Invalid Email Format';
    }

    if (emailAlreadyExist) {
      signupErrors.message = 'Email already exist';
    }

    if (!password || password.length < 3) {
      signupErrors.message = 'Password is required, with at least three characters';
    }

    if (!confirmPassword || confirmPassword !== password) {
      signupErrors.message = 'Passwords don\'t match';
    }
    return signupErrors;
  }

  /**
   * @description validate user details
   * @function signinValidations
   * @param {object} body
   * @returns {Array} signinErrors
   */
  static signinValidations(body: any ) {
    const { email, password } = body;
    const signinErrors: any = {};

    if (!email || !validEmail.test(email)) {
      signinErrors.message = 'Invalid Email Format';
    }

    if (!password || password.length < 2) {
      signinErrors.message = 'Password must be at least three characters';
    }

    return signinErrors;
  }

  /**
   * @description validate user details
   * @function editValidations
   * @param {object} body
   * @returns {Array} editErrors
   */
  static async editValidations(body: any, userId: number) {
    const { fullName, lastName, email, phoneNumber } = body;
    const editErrors: any = {};
    const emailAlreadyExist: any = await checkEmail(email);
    const phoneNumberAlreadyExist: any = await checkPhoneNumber(phoneNumber);

    if (!fullName || fullName.length < 3 || !validName.test(fullName)) {
      editErrors.message = 'First name is required, with at least three alphabetical characters';
    }
   
    if (!lastName || lastName.length < 3 || !validName.test(lastName)) {
      editErrors.message = 'Last name is required, with at least three alphabetical characters';
    }
    if (!email || !validEmail.test(email)) {
      editErrors.message = 'Invalid Email Format';
    }
   
    if (emailAlreadyExist !== null && emailAlreadyExist.email.length > 0 && emailAlreadyExist.id !== userId
      ) {
        editErrors.message = 'User with this email already exist';
      }
    if (!phoneNumber || !validPhoneNumber.test(phoneNumber)) {
      editErrors.message = 'Phone Number is required and must be up to 11 digits';
    }

    if (phoneNumberAlreadyExist !== null
      && phoneNumberAlreadyExist.phoneNumber.length > 0
      && phoneNumberAlreadyExist.id !== userId
    ) {
      editErrors.message = 'User with this phone number already exist';
    }
    return editErrors;
  }
}
export default validations;