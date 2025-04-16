import { Router } from "express";
import { UserRouters } from "../../module/User/user.route";
import { ProductRouters } from "../../module/Products/product.route";
import { OrderRoutes } from "../../module/Orders/order.route";
import { AuthRoutes } from "../../module/Auth/auth.route";

const router = Router();

const moduleRouters = [
    {
        path: '/users',
        route: UserRouters
    },
    {
        path: '/products',
        route: ProductRouters
    },
    {
        path: '/order',
        route: OrderRoutes
    }, 
    
    {
        path: '/auth',
        route: AuthRoutes
    }, 

]

    // let decoded;
    // try {
    //   const decoded = jwt.verify(
    //     token,
    //     config.jwt_access_secret as string,
    //   ) as JwtPayload;
    // } catch (err) {
    //   throw new AppError(httpStatus.UNAUTHORIZED, 'Unauthorized');
    // }



moduleRouters.forEach((route) => router.use(route.path, route.route));
export default router;
