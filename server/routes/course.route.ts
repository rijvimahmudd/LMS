import express from 'express';
import { authorizedRoles, isAuthenticated } from '../utils/auth';
import {
  addAnswer,
  addQuestion,
  addReplyToReview,
  addReview,
  editCourse,
  getAllCourses,
  getCourseByUser,
  getSingleCourse,
  uploadCourse,
} from '../controllers/course.controller';
const router = express.Router();

router.post(
  '/create-course',
  isAuthenticated,
  authorizedRoles('admin'),
  uploadCourse,
);

router.patch(
  '/edit-course/:id',
  isAuthenticated,
  authorizedRoles('admin'),
  editCourse,
);

router.get('/get-course/:id', getSingleCourse);

router.get('/get-courses', getAllCourses);

router.get('/get-course-content/:id', isAuthenticated, getCourseByUser);

router.patch('/add-question', isAuthenticated, addQuestion);

router.patch('/add-answer', isAuthenticated, addAnswer);

router.patch('/add-review/:id', isAuthenticated, addReview);

router.patch(
  '/add-reply',
  isAuthenticated,
  authorizedRoles('admin'),
  addReplyToReview,
);

export default router;
