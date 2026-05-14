// Package Express Connection
import express from 'express';
// Middleware Connection
import authMiddleware from '../middleware/auth.js';
// Order Controller Connection
import {
  placeOrder,
  verifyOrder,
  userOrders,
  listOrders,
  updateStatus,
} from '../controllers/orderController.js';

const orderRouter = express.Router();

orderRouter.post('/place', authMiddleware, placeOrder);
orderRouter.post('/verify', verifyOrder);
orderRouter.post('/userorders', authMiddleware, userOrders);
orderRouter.get('/list', listOrders);
orderRouter.post('/status', updateStatus);

export default orderRouter;
