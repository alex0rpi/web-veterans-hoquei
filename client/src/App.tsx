import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NotFound } from './components';
import { AdminPage, MainPage } from './pages';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/admin/login" element={<AdminPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
