import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainContent, NotFound } from "./components";
import AdminLogin from "./components/admin/auth/AdminLogin";
import AdminRegister from "./components/admin/auth/AdminRegister";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainContent />,
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
