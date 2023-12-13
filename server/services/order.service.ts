import { NextFunction, Response } from 'express';
import { catchAsyncError } from '../middleware/catchAsyncError';
import Order from '../models/order.model';

// create new order
export const newOrder = catchAsyncError(
  async (data: any, res: Response, next: NextFunction) => {
    const order = await Order.create(data);
    res.status(201).json({
      success: true,
      order,
    });
  },
);
