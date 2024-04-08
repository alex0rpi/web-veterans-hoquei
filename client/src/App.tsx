import React from 'react';
import { MainLayout } from './layouts/Layout';
import { PageList, NotFound } from './pages';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import UserProvider from './context/UserContext';
import { paths } from './constants';
import ChapterProvider from './context/ChaptersContext';

const routePaths = [
  // * Main paths *
  paths.home,
  paths.season,
  paths.book,
  // paths.blog, // Not implemented
  // paths.players, // Not implemented
  // * Auth paths
  paths.login,
  paths.register,
  paths.verify,
  paths.requestPasswordReset,
  paths.updatePassword,
  // * Admin paths *
  paths.newChapter,
  paths.userChapterList,
  paths.editChapter,
  paths.me,
];

const router = createBrowserRouter([
  ...routePaths.map((path) => ({
    path,
    element: <MainLayout>{React.createElement(PageList)}</MainLayout>,
  })),
  {
    path: '*',
    element: <MainLayout>{React.createElement(NotFound)}</MainLayout>,
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
