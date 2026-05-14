// Package Express Connection
import express from 'express';
// User Controller Connection
import { loginUser, registerUser } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);

export default userRouter;
