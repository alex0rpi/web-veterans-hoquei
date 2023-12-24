import { ToastContainer } from 'react-toastify';
import { Navigation } from '../components/navigation/Navigation';
// import { Outlet } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { PropsWithChildren } from 'react';

export const MainLayout = (props: PropsWithChildren) => {
  const location = useLocation();
  const gridClass =
    location.pathname === '/llibre-veterans-hoquei-patins-fcb'
      ? 'book-grid'
      : 'main-grid';
  return (
    <div
      className={`${gridClass} md:bg-hero-pattern md:bg-cover transition-all duration-200`}
    >
      <Navigation />
      <div className="main-column-layout">
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          // pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {props.children}
      </div>
      {/* Outlet is a special component that will render the child route’s component */}
    </div>
  );
};
