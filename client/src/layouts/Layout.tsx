import { ToastContainer } from 'react-toastify';
import { Navigation } from '../components/navigation/Navigation';
// import { Outlet } from "react-router-dom";
import { PropsWithChildren } from 'react';

export const MainLayout = (props: PropsWithChildren) => {
  return (
    <div className="main-grid bg-hero-pattern bg-cover">
      <Navigation />
      <div className="main-column-layout">
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {/* Same as */}
        {props.children}
      </div>
      {/* Outlet is a special component that will render the child route’s component */}
    </div>
  );
};
