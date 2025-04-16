import express from 'express';
import { ProductController } from './product.controller';
import auth from '../../app/middlewares/auth';
import { USER_ROLE } from '../User/user.constant';
import { userInfo } from 'os';

const router = express.Router();

router.post('/create-product', ProductController.createProduct);
router.get('/:product', ProductController.getSingleProduct);
router.delete('/:product', ProductController.deleteProduct);
router.put('/:product', ProductController.updateProduct);
router.get(
  '/',
  auth(USER_ROLE.admin, USER_ROLE.customer),
  ProductController.getProduct,
);

export const ProductRouters = router;
