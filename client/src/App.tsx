import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import UserProvider from './context/UserContext';
import { MainLayout } from './layouts/Layout';
import { paths } from './constants';
import { PageList, NotFound } from './pages';
import ChapterProvider from './context/ChaptersContext';
import React from 'react';

const routePaths = [
  // Main paths
  paths.home,
  paths.season,
  paths.book,
  // paths.blog, // Not implemented
  paths.players, // Not implemented
  // Auth paths
  paths.login,
  // paths.register,
  // paths.verify,
  paths.requestPasswordReset,
  paths.updatePassword,
  // Admin paths
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
