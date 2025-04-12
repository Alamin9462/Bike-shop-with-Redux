import CustomerDashboard from '../page/customer/CustomerDashboard';
import Orders from '../page/customer/Orders';

export const customerPaths = [
  {
    name: 'Dashboard',
    path: 'dashboard',
    element: <CustomerDashboard />,
  },
  {
    name: 'Orders',
    path: 'my-orders',
    element: <Orders />,
  },
];
