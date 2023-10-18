// get user by id
import { Response } from 'express';
import { redis } from '../utils/redis';

export const getUserById = async (id: string, res: Response) => {
  const data = await redis.get(id);
  if (data) {
    const user = JSON.parse(data);
    res.status(200).json({
      success: true,
      user,
    });
  }
};
