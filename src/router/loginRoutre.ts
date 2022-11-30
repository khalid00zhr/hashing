import express from 'express';
import validate from '../middleware/validate';
import { loginSchema, registerSchema } from '../zod_schema/loginSchema'
import { loginHandler, registerHandler } from "../controlers/logincontroler";
const router = express.Router();


router.post('/login',validate(loginSchema),loginHandler );
router.post('/register',validate(registerSchema),registerHandler );

export default router;