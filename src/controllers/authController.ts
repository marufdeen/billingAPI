import { Request, Response } from "express";
import bcrypt from 'bcryptjs'
import { createToken } from '../helpers/createToken'
import { User } from "../models";


const saltRounds: number = 10;
 
    export async function register(req: Request, res: Response) {
      const { fullName, email, password } = req.body;
      await bcrypt.hash(password, saltRounds, async (error, hash) => {
        const createUser = new User({
          fullName, 
          email: email.toLowerCase(),
          password: hash, 
        });
        const newUser = await createUser.save();
        return res.status(201).json({
          message: "User successfully created",
          token: await createToken(newUser),
        });
      });
    } 

  /**
   * @description login user from database
   * @method POST
   * @param {*} req
   * @param {*} res
   */
   export async function login(req: Request, res: Response)  {
    const { email, password } = req.body;
    const userFound: any = await User.findOne(email);
    if (userFound) {
      await bcrypt.compare(password, userFound.password, (error, result) => {
        if (result) {
          return res.status(200).send({
            message: "Access granted!",
            token: createToken(userFound),
          });
        }
        return res.send('Email and password not match!');
      });
    } else {
      return res.send('Access denied!');
    }
  }