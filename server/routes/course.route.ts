import express from 'express';
import { authorizedRoles, isAuthenticated } from '../utils/auth';
import {
  editCourse,
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

export default router;
