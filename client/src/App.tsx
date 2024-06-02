import { MainLayout } from './layouts/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage, NotFound } from './pages';
import { paths } from './constants';
import { lazy, Suspense } from 'react';
import { Spinner } from './components/UI-components';

// prettier-ignore
function App() {
  const BookPage = lazy(() => import('./pages/BookPage'));
  const SeasonPage = lazy(() => import('./pages/SeasonPage'));

  const fallBackSpinner = <div className='flex items-center justify-center'>
                            <Spinner />
                          </div>
  return (
    <BrowserRouter>
      <Routes>
        <Route path={paths.home} element={<MainLayout><HomePage /></MainLayout>} />
        <Route path={paths.season} element={<MainLayout><Suspense fallback={fallBackSpinner}><SeasonPage /></Suspense></MainLayout>} />
        <Route path={paths.book} element={<MainLayout><Suspense fallback={fallBackSpinner}><BookPage /></Suspense></MainLayout>} />
        <Route path='*' element={<MainLayout><Suspense fallback={fallBackSpinner}><NotFound /></Suspense></MainLayout>} />
      </Routes>
  </BrowserRouter>
  )
}

export default App;
