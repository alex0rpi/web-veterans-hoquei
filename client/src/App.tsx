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

const router = createBrowserRouter([
  // Pending wrap the routes in a Layout component
  {
    path: '/',
    element: (
      <MainLayout>
        <MainContent />
      </MainLayout>
    ),
  },
  {
    path: '/temporades/:season',
    element: (
      <MainLayout>
        <SeasonContent />
      </MainLayout>
    ),
  },
  {
    path: '/llibre-veterans-hoquei-patins-fcb',
    element: (
      <MainLayout>
        <BookPage />
      </MainLayout>
    ),
  },
  {
    path: '/admin/login',
    element: (
      <MainLayout>
        <AdminLogin />
      </MainLayout>
    ),
  },
  {
    path: '/admin/register',
    element: (
      <MainLayout>
        <AdminRegister />
      </MainLayout>
    ),
  },
  {
    path: '/admin/new-chapter',
    element: (
      <MainLayout>
        <NewChapterForm />
      </MainLayout>
    ),
  },
  {
    path: '/admin/chapter-list',
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
