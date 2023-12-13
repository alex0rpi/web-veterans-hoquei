import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContent from './pages/MainContent';
import NotFound from './pages/NotFound';
import BookPage from './pages/BookPage';
import AdminLogin from './components/admin/AdminLogin';
import AdminRegister from './components/admin/AdminRegister';
import SeasonContent from './components/main/SeasonContent';
import NewChapterForm from './components/admin/chapters/NewChapterForm';
import AdminChapters from './components/admin/chapters/AdminChapters';
import UserProvider from './context/UserContext';
import { MainLayout } from './layouts/Layout';
import { paths } from './constants';

const router = createBrowserRouter([
  // Pending wrap the routes in a Layout component
  {
    path: paths.home,
    element: (
      <MainLayout>
        <MainContent />
      </MainLayout>
    ),
  },
  {
    path: paths.season,
    element: (
      <MainLayout>
        <SeasonContent />
      </MainLayout>
    ),
  },
  {
    path: paths.book,
    element: (
      <MainLayout>
        <BookPage />
      </MainLayout>
    ),
  },
  {
    path: paths.login,
    element: (
      <MainLayout>
        <AdminLogin />
      </MainLayout>
    ),
  },
  {
    path: paths.register,
    element: (
      <MainLayout>
        <AdminRegister />
      </MainLayout>
    ),
  },
  {
    path: paths.newChapter,
    element: (
      <MainLayout>
        <NewChapterForm />
      </MainLayout>
    ),
  },
  {
    path: paths.userChapterList,
    element: (
      <MainLayout>
        <AdminChapters />
      </MainLayout>
    ),
  },

  {
    path: '*',
    element: (
      <MainLayout>
        <NotFound />
      </MainLayout>
    ),
  },
]);

function App() {
  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  );
}

export default App;
