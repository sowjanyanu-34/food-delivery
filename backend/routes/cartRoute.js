// Package Express Connection
import express from 'express';
// Cart Controller Connection
import {
  addToCart,
  removeFromCart,
  getCart,
} from '../controllers/cartController.js';
// Auth Middleware Connection
import authMiddleware from '../middleware/auth.js';

const cartRouter = express.Router();

cartRouter.post('/add', authMiddleware, addToCart);
cartRouter.post('/remove', authMiddleware, removeFromCart);
cartRouter.post('/get', authMiddleware, getCart);

export default cartRouter;
