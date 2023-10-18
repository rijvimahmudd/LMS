import { Response } from 'express';
import Course, { ICourse } from '../models/course.model';

// create course
export const createCourse = async (data: ICourse, res: Response) => {
  const course = await Course.create(data);
  res.status(201).json({
    success: true,
    course,
  });
};
