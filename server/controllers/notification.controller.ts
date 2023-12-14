import { NextFunction, Request, Response } from 'express';
import { catchAsyncError } from '../middleware/catchAsyncError';
import Notification from '../models/notification.model';
import ErrorHandler from '../utils/ErrorHandler';

// get all notifications -- only admin
export const getNotifications = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const notifications = await Notification.find().sort({ createdAt: -1 });
      res.status(201).json({
        success: true,
        notifications,
      });
    } catch (error: unknown) {
      return next(new ErrorHandler((error as Error).message, 400));
    }
  },
);

// update notification status -- only admin

export const updateNotification = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    const notification = await Notification.findById(req.params.id);
    if (notification && notification.status) {
      notification.status = 'read';
    } else {
      return next(new ErrorHandler('Notification not found', 404));
    }

    await notification?.save();

    // sending the all updated notifications
    const notifications = await Notification.find().sort({ createdAt: -1 });

    res.status(201).json({
      success: true,
      notifications,
    });
  },
);
