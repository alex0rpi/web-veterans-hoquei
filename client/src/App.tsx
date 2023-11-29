import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContent from "./components/main/MainContent";
import NotFound from "./pages/NotFound";
import AdminLogin from "./components/admin/AdminLogin";
import AdminRegister from "./components/admin/AdminRegister";
import SeasonContent from "./components/main/SeasonContent";
import NewChapterForm from "./components/admin/chapters/NewChapterForm";
import AdminChapters from "./components/admin/chapters/AdminChapters";
import { AuthProvider } from "./context/AuthProvider";

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
  {
    path: "/admin/new-chapter",
    element: <NewChapterForm />,
  },
  {
    path: "/admin/chapter-list",
    element: <AdminChapters />,
  },

  { path: "*", element: <NotFound /> },
]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
