import AdminDashboard from '../page/admin/AdminDashboard';
import Orders from '../page/admin/Orders';

// A centralised array for routes and sidebar items (like union)
export const adminPaths = [
  {
    name: 'Dashboard',
    path: 'dashboard',
    element: <AdminDashboard />,
  },
  {
    name: 'Products',
    children: [
      {
        name: 'Add New',
        path: 'products/add-new',
        element: <Orders />,
      },
    ],
  },
  {
    name: 'Orders',
    children: [
      {
        name: 'Create Custom Order',
        path: 'orders/create-custom-order',
        element: <Orders />,
      },
      {
        name: 'Manage Orders',
        path: 'orders/manage-orders',
        element: <Orders />,
      },
    ],
  },
  {
    name: 'Customers',
    children: [
      {
        name: 'Add New',
        path: 'customers/add-new',
        element: <Orders />,
      },
    ],
  },
];

// export const adminSidebarItems = adminPaths.reduce(
//   (acc: TSidebarItem[], item) => {
//     if (item.path && item.element) {
//       acc.push({
//         key: item.name,
//         label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
//       });
//     }

//     if (item.children) {
//       acc.push({
//         key: item.name,
//         label: item.name,
//         children: item.children.map((child) => ({
//           key: child.name,
//           label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>,
//         })),
//       });
//     }

//     return acc;
//   },
//   []
// );

//* Programmatical way

// export const adminRoutes = adminPaths.reduce((acc: TRoute[], item) => {
//   if (item.path && item.element) {
//     acc.push({
//       path: item.path,
//       element: item.element,
//     });
//   }

//   if (item.children) {
//     item.children.forEach((child) => {
//       acc.push({
//         path: child.path,
//         element: child.element,
//       });
//     });
//   }
//   return acc;
// }, []);

//* Hard coded way

// export const adminPaths = [
//   {
//     index: true,
//     element: <AdminDashboard />,
//   },
//   {
//     path: 'dashboard',
//     element: <AdminDashboard />,
//   },
//   {
//     path: 'create-admin',
//     element: <CreateAdmin />,
//   },
//   {
//     path: 'create-faculty',
//     element: <CreateFaculty />,
//   },
//   {
//     path: 'create-student',
//     element: <CreateStudent />,
//   },
// ];
