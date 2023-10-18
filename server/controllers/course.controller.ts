import { Request, Response, NextFunction } from 'express';
import { catchAsyncError } from '../middleware/catchAsyncError';
import ErrorHandler from '../utils/ErrorHandler';
import { v2 as cloudinary } from 'cloudinary';
import { createCourse } from '../services/course.service';
import courseModel, { ICourse } from '../models/course.model';

// upload course
export const uploadCourse = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data: ICourse = req.body;

      // thumbnail pass from front-end as string and return it as object with necessary properties
      const thumbnail = data.thumbnail;
      if (thumbnail && typeof thumbnail === 'string') {
        const myCloud = await cloudinary.uploader.upload(thumbnail, {
          upload_preset: 'courses',
        });
        data.thumbnail = {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        } as {
          public_id: string;
          url: string;
        };
      }
      createCourse(data, res);
    } catch (error: unknown) {
      next(new ErrorHandler((error as Error).message, 500));
    }
  },
);

// edit course
export const editCourse = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body;
      const thumbnail = data.thumbnail;
      if (thumbnail) {
        await cloudinary.uploader.destroy(thumbnail.public_id);
        const myCloud = await cloudinary.uploader.upload(thumbnail, {
          upload_preset: 'courses',
        });

        data.thumbnail = {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        };
      }

      const courseId = req.params.id;
      if (courseId) {
        const course = await courseModel.findByIdAndUpdate(
          courseId,
          { $set: data },
          {
            new: true,
          },
        );
        res.status(201).json({
          success: true,
          course,
        });
      }
    } catch (error: unknown) {
      return next(new ErrorHandler((error as Error).message, 400));
    }
  },
);

// get single course
export const getSingleCorse = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    
  },
);
