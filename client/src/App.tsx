import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import UserProvider from './context/UserContext';
import { MainLayout } from './layouts/Layout';
import { paths } from './constants';
import {
  MainPage,
  AdminPage,
  SeasonPage,
  BookPage,
  BlogPage,
  PlayersPage,
  NotFound,
  AuthPage,
} from './pages';
import ChapterProvider from './context/ChaptersContext';
import UpdatePassword from './components/auth/UpdatePassword';
import RequestPasswordReset from './components/auth/RequestPasswordReset';

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
        <AuthPage />
      </MainLayout>
    ),
  },
  {
    path: paths.register,
    element: (
      <MainLayout>
        <AuthPage />
      </MainLayout>
    ),
  },
  {
    path: paths.verify,
    element: (
      <MainLayout>
        <AuthPage />
      </MainLayout>
    ),
  },
  {
    path: paths.requestPasswordReset,
    element: (
      <MainLayout>
        <RequestPasswordReset />
      </MainLayout>
    ),
  },
  {
    path: paths.updatePassword,
    element: (
      <MainLayout>
        <UpdatePassword />
      </MainLayout>
    ),
  },
  {
    path: paths.newChapter,
    element: (
      <MainLayout>
        <AdminPage />
      </MainLayout>
    ),
  },
  {
    path: paths.userChapterList,
    element: (
      <MainLayout>
        <AdminPage />
      </MainLayout>
    ),
  },
  {
    path: paths.editChapter,
    element: (
      <MainLayout>
        <AdminPage />
      </MainLayout>
    ),
  },
  {
    path: paths.me,
    element: (
      <MainLayout>
        <AdminPage />
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
