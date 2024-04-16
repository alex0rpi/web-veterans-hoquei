import { ToastContainer } from 'react-toastify';
import { useLocation } from 'react-router-dom';
import { PropsWithChildren } from 'react';
import { paths } from '../constants';
import { AnimatePresence, easeInOut, motion } from 'framer-motion';
import { NavigationBar } from '../components/navigation';

export const MainLayout = (props: PropsWithChildren) => {
  const location = useLocation();
  let gridClass: string;
  const isBookPage = location.pathname === paths.book;
  if (isBookPage) {
    gridClass = 'book-grid';
  } else {
    gridClass = 'main-grid';
  }

  return (
    <div className={`${gridClass} md:bg-hero-pattern md:bg-cover transition-all duration-200`}>
      <div className={`main-column-layout`}>
        <ToastContainer
          position='bottom-right'
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnHover={true}
          theme='light'
        />
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: easeInOut, duration: 1 }}
            exit={{ opacity: 0 }}
            className='centerLayout'
          >
            <NavigationBar />
            <div className={`${isBookPage ? 'bookPageLayout' : 'pageLayout'}`}>
              {props.children}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
