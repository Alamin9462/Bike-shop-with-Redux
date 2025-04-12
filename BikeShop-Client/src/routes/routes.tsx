import App from '../App';
import { createBrowserRouter } from 'react-router-dom';
import About from '../page/About';
import Contact from '../page/Contact';
import Register from '../page/Register';
import Login from '../page/Login';
import { routeGenerator } from '../utils/routesGenerator';
import { adminPaths } from './admin.routes';
import { customerPaths } from './customer.routes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'about', // relative path
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
  {
    path: '/admin',
    element: <App />,
    children: routeGenerator(adminPaths),
  },
  {
    path: '/customer',
    element: <App />,
    children: routeGenerator(customerPaths),
  },
  {
    path: '/register', // absolute path
    element: <Register />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

export default router;
