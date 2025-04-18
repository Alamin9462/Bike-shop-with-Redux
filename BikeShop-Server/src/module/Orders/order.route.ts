import express from 'express';

import { OrderController } from './order.controller';
// import { createOrder, getOrdersByUser } from './order.controller';

const router = express.Router();

router.post('/create-order', OrderController.createOrder);
router.get('/', OrderController.getOrder ); // Get orders by user ID

export const OrderRoutes = router;
 