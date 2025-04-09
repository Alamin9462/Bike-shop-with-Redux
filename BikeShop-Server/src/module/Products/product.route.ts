import express from 'express';
import { ProductController } from './product.controller';

const router = express.Router();


router.post(
  '/create-product',
  ProductController.createProduct,
);
router.get('/:product', ProductController.getSingleProduct);
router.delete('/:product', ProductController.deleteProduct);
router.put('/:product', ProductController.updateProduct);
router.get('/', ProductController.getProduct);

export const ProductRouters = router;