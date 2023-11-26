import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainContent, NotFound } from './components';
import AdminLogin from './components/admin/auth/AdminLogin';
import AdminRegister from './components/admin/auth/AdminRegister';
import { MainLayout } from './layouts/Layout';
// import { mainContentLoader } from './components/main/MainContent';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    // loader: mainContentLoader, // loads data for the page
    // errorElement: <Error />, // shows error if data failed to load
    // actions:
    children: [
      {
        path: '/',
        element: <MainContent />,
      },
      {
        path: '/admin/login',
        element: <AdminLogin />,
      },
      {
        path: '/admin/register',
        element: <AdminRegister />,
      },
    ],
  },
  { path: '*', element: <NotFound /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
