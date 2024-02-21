import { ToastContainer } from 'react-toastify';
// import { Outlet } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { PropsWithChildren } from 'react';
import { Navigation } from '../components/navigation/Navigation';

export const MainLayout = (props: PropsWithChildren) => {
  const location = useLocation();
  let opacityAmount: string;
  let gridClass: string;
  if (location.pathname === '/llibre-veterans-hoquei-patins-fcb') {
    opacityAmount = '100';
    gridClass = 'book-grid';
  } else {
    opacityAmount = '90';
    gridClass = 'main-grid';
  }
  return (
    <div
      className={`${gridClass} md:bg-hero-pattern md:bg-cover transition-all duration-200`}
    >
      <Navigation />

      <div className={`main-column-layout opacity-${opacityAmount}`}>
        <ToastContainer
          position='bottom-right'
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          // pauseOnFocusLoss
          draggable
          pauseOnHover={false}
          theme='light'
        />
        {props.children}
      </div>
      {/* Outlet is a special component that will render the child route’s component */}
    </div>
  );
};
