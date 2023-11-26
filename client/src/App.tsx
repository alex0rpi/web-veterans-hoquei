import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { NotFound } from './components';
import { AdminPage, MainPage } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    // loader:
    // actions:
    // errorElement
  },
  {
    path: '/admin/login',
    element: <AdminPage />,
    // loader:
    // actions:,
    // errorElement
  },
  { path: '*', element: <NotFound /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
