import { Router } from 'express';
import { UserRouters } from '../../module/User/user.route';
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
];

moduleRouters.forEach((route) => router.use(route.path, route.route));
export default router;
