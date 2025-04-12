import CustomerDashboard from '../page/customer/CustomerDashboard';
import MyOrders from '../page/customer/MyOrders';

export const customerPaths = [
  {
    name: 'Dashboard',
    path: 'dashboard',
    element: <CustomerDashboard />,
  },
  {
    name: 'My Orders',
    path: 'my-orders',
    element: <MyOrders />,
  },
];
