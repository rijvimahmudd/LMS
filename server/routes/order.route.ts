import express, { Router } from 'express';
import { isAuthenticated } from '../utils/auth';
import { createOrder } from '../controllers/order.controller';
const router: Router = express.Router();

router.post('/create-order', isAuthenticated, createOrder);

export default router;
