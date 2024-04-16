import React from 'react';
import { MainLayout } from './layouts/Layout';
import { PageList, NotFound } from './pages';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { paths } from './constants';
import ChapterProvider from './context/ChaptersContext';

const routePaths = [
  // * Main paths *
  paths.home,
  paths.season,
  paths.book,
  // paths.players, // Not implemented
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
      <RouterProvider router={router} />
    </ChapterProvider>
  );
}

export default App;
