import { Request, Response, NextFunction } from 'express';
import  validation from '../helpers/userValidations'

export const validateSignup = async (req: Request , res: Response, next: NextFunction) => {
  const errors = await validation.signupValidations(req.body);
  if (Object.keys(errors).length > 0) {
    return res.send(errors);
  }
  return next();
};

export const validateSignin = async  (req: Request , res: Response, next: NextFunction) => {
  const errors = await validation.signinValidations(req.body);
  if (Object.keys(errors).length > 0) {
    return res.send(errors);
  }
  return next();
};

export const validateEdit = async (req: any , res: Response, next: NextFunction)=> {
  const userId = (req.decoded.userId);
  const errors = await validation.editValidations(req.body, userId);
  if (Object.keys(errors).length > 0) {
    return res.send(errors);
  }
  return next();
};
/* 
export { validateSignup, validateSignin, validateEdit } */