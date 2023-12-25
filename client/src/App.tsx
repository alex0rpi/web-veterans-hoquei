import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AdminLogin from './components/admin/AdminLogin';
import AdminRegister from './components/admin/AdminRegister';
import NewChapterForm from './components/admin/chapters/NewChapterForm';
import AdminChapters from './components/admin/chapters/AdminChapterList';
import UserProvider from './context/UserContext';
import { MainLayout } from './layouts/Layout';
import { paths } from './constants';
import AdminData from './components/admin/AdminData';
import { MainPage, SeasonPage, BookPage, BlogPage, PlayersPage, NotFound } from './pages';
import ChapterProvider from './context/ChaptersContext';

const router = createBrowserRouter([
  {
    path: paths.home,
    element: (
      <MainLayout>
        <MainPage />
      </MainLayout>
    ),
  },
  {
    path: paths.season,
    element: (
      <MainLayout>
        <SeasonPage />
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
    path: paths.blog,
    element: (
      <MainLayout>
        <BlogPage />
      </MainLayout>
    ),
  },
  {
    path: paths.players,
    element: (
      <MainLayout>
        <PlayersPage />
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
    path: paths.me,
    element: (
      <MainLayout>
        <AdminData />
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
    <ChapterProvider>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </ChapterProvider>
  );
}

export default App;
