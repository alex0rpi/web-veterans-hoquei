import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContent from "./components/main/MainContent";
import NotFound from "./pages/NotFound";
import AdminLogin from "./components/admin/auth/AdminLogin";
import AdminRegister from "./components/admin/auth/AdminRegister";
import SeasonContent from './components/main/SeasonContent';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainContent />,
  },
  {
    path: "/temporades/:season",
    element: <SeasonContent />,
  },
  {
    path: "/admin/login",
    element: <AdminLogin />,
  },
  {
    path: "/admin/register",
    element: <AdminRegister />,
  },

  { path: "*", element: <NotFound /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
