import { MainLayout } from './layouts/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthPage, HomePage, NotFound } from './pages';
import { paths } from './constants';
import { lazy, Suspense } from 'react';
import { Spinner } from './components/UI-components';
import UserProvider from './context/UserContext';
import ChapterProvider from './context/ChaptersContext';

// prettier-ignore
function App() {
  const BookPage = lazy(() => import('./pages/BookPage'));
  const SeasonPage = lazy(() => import('./pages/SeasonPage'));
  const authPaths = [
    paths.login,
    paths.register,
    paths.verify,
    paths.requestPasswordReset,
    paths.updatePassword,
  ];

  const fallBackSpinner = <div className='flex items-center justify-center'>
                            <Spinner />
                          </div>
  return (
    <ChapterProvider>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path={paths.home} element={<MainLayout><HomePage /></MainLayout>} />
            <Route path={paths.season} element={<MainLayout><Suspense fallback={fallBackSpinner}><SeasonPage /></Suspense></MainLayout>} />
            <Route path={paths.book} element={<MainLayout><Suspense fallback={fallBackSpinner}><BookPage /></Suspense></MainLayout>} />
            {authPaths.map((path) => (
              <Route key={path} path={path} element={<MainLayout><Suspense fallback={fallBackSpinner}><AuthPage /></Suspense></MainLayout>} />
            ))}
            <Route path='*' element={<MainLayout><Suspense fallback={fallBackSpinner}><NotFound /></Suspense></MainLayout>} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </ChapterProvider>
  )
}

export default App;
