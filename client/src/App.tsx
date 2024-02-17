import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import UserProvider from './context/UserContext';
import { MainLayout } from './layouts/Layout';
import { paths } from './constants';
import AdminData from './pages/AdminData';
import {
  MainPage,
  AdminLogin,
  AdminRegister,
  AdminChapterList,
  AdminChapterNew,
  AdminChapterEdit,
  SeasonPage,
  BookPage,
  BlogPage,
  PlayersPage,
  NotFound,
} from './pages';
import ChapterProvider from './context/ChaptersContext';
import UserVerify from './pages/UserVerify';
import UpdatePassword from './pages/UpdatePassword';
import RequestPasswordReset from './pages/RequestPasswordReset';

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
    path: paths.verify,
    element: (
      <MainLayout>
        <UserVerify />
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
        <AdminChapterNew />
      </MainLayout>
    ),
  },
  {
    path: paths.userChapterList,
    element: (
      <MainLayout>
        <AdminChapterList />
      </MainLayout>
    ),
  },
  {
    path: paths.editChapter,
    element: (
      <MainLayout>
        <AdminChapterEdit />
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
