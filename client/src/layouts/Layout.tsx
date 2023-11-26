import { Navigation } from '../components';
import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
  return (
    <div className="main-grid">
      <Navigation />
      <div className="main-column-layout">
        <Outlet />
      </div>
      {/* Outlet is a special component that will render the child route’s component */}
    </div>
  );
};
