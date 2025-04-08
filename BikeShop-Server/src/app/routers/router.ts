import { Router } from "express";
import { UserRouters } from "../../module/User/user.route";

const router = Router();

const moduleRouters = [
    {
        path: '/users',
        route: UserRouters

        
    }
]


moduleRouters.forEach(route => router.use(route.path, route.route));
export default router;