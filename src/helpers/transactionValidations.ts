import { validNumber, validPhoneNumber}  from './regEx';

    /**
     * @description validate delivery details
     * @function createRideValidations
     * @param {object} body
     * @returns {Array} transactionErrors
     */

    export function validateDelivery(body: any) { 
    const { fullName, recipientName } = body
    const transactionErrors: any = {};

    if (!fullName || fullName.length < 3 ) {
      transactionErrors.message =  'Full NAme is required, with at least three alphabetical characters';
    }

    if (!recipientName || recipientName.length < 3 ) {
      transactionErrors.message =  'Recepient Name is required, with at least three alphabetical characters';
    } 

    return transactionErrors;
    } 