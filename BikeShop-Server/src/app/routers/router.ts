import { Router } from 'express';
import { UserRouters } from '../../module/User/user.route';
import { ProductRouters } from '../../module/Products/product.route';
import { OrderRoutes } from '../../module/Orders/order.route';
import { AuthRoutes } from '../../module/Auth/auth.route';

const router = Router();

const moduleRouters = [
  {
    path: '/users',
    route: UserRouters,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/products',
    route: ProductRouters,
  },
  {
    path: '/order',
    route: OrderRoutes,
  },
];

moduleRouters.forEach((route) => router.use(route.path, route.route));
export default router;
