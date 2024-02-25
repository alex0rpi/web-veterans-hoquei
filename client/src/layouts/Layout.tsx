import { ToastContainer } from 'react-toastify';
import { useLocation } from 'react-router-dom';
import { PropsWithChildren } from 'react';
import { paths } from '../constants';

export const MainLayout = (props: PropsWithChildren) => {
  const location = useLocation();
  let gridClass: string;
  if (location.pathname === paths.book) {
    gridClass = 'book-grid';
  } else {
    gridClass = 'main-grid';
  }
  return (
    <div
      className={`${gridClass} md:bg-hero-pattern md:bg-cover transition-all duration-200`}
    >
      <div className={`main-column-layout`}>
        <ToastContainer
          position='bottom-right'
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          // pauseOnFocusLoss
          // draggable
          pauseOnHover={true}
          theme='light'
        />
        {props.children}
      </div>
    </div>
  );
};
