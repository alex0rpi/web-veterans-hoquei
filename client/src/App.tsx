import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { NotFound } from './components';
import { AdminPage, MainPage } from './pages';
import { mainPageLoader } from './pages/MainPage';
// import Error from './helpers/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    loader: mainPageLoader, // loads data for the page
    // errorElement: <Error />, // shows error if data failed to load
    // actions:
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
