import { UserController } from "./user.controller";
import express from 'express';

const router = express.Router();


router.post(
  '/create-student',
  UserController.createUSer,
);
router.get('/:userId');
router.delete('/:userId');
router.get('/');

export const UserRouters = router;