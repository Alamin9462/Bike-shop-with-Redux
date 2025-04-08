import { UserController } from "./user.controller";
import express from 'express';

const router = express.Router();


router.post(
  '/create-user',
  UserController.createUSer,
);
// router.get('/:userId');
// router.delete('/:userId');
// router.get('/');

export const UserRouters = router;