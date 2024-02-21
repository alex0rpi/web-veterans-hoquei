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
import React from 'react';

const routes = [
  { path: paths.home, component: MainPage },
  { path: paths.season, component: SeasonPage },
  { path: paths.book, component: BookPage },
  { path: paths.blog, component: BlogPage },
  { path: paths.players, component: PlayersPage },
  { path: paths.login, component: AuthPage },
  { path: paths.register, component: AuthPage },
  { path: paths.verify, component: AuthPage },
  { path: paths.requestPasswordReset, component: RequestPasswordReset },
  { path: paths.updatePassword, component: UpdatePassword },
  { path: paths.newChapter, component: AdminPage },
  { path: paths.userChapterList, component: AdminPage },
  { path: paths.editChapter, component: AdminPage },
  { path: paths.me, component: AdminPage },
  { path: '*', component: NotFound },
];

const router = createBrowserRouter(
  routes.map(({ path, component }) => ({
    path,
    element: <MainLayout>{React.createElement(component)}</MainLayout>,
  }))
);

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
