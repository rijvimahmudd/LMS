import express from 'express';
import { authorizedRoles, isAuthenticated } from '../utils/auth';
import { getNotifications } from '../controllers/notification.controller';
const router = express.Router();

router.get(
  '/get-all-notifications',
  isAuthenticated,
  authorizedRoles('admin'),
  getNotifications,
);

export default router;
