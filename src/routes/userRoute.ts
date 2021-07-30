import { Router } from "express";
import { validateSignup, validateSignin, validateEdit } from '../middlewares/userCredentials'; 
import { register, login } from "../controllers"; 
const router = Router();

 router.post("/register", validateSignup, register);
router.post("/login", validateSignin, login);

export default router;
