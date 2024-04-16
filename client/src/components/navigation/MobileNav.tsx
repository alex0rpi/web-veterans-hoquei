import { easeIn, motion } from 'framer-motion';
import { MainNavList, PageNavList, Footer } from './index';
import * as ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

type TMobileNavProps = {
  onModalClick?: () => void;
};

const MobileNav = ({ onModalClick }: TMobileNavProps) => {
  const modalScreen = (
    <>
      <motion.div
        initial={{ opacity: 0, right: '-100vw' }}
        animate={{ opacity: 1, right: '55vw' }}
        exit={{ opacity: 0, right: '-100vw' }}
        transition={{ duration: 0.2 }}
        className='z-30 fixed translate-x-full md:translate-x-0 top-[0vh] w-[55vw] right-[40vw] bg-primary bg-opacity-90 ps-6 pe-6 pb-2 pt-4 rounded-s-lg text-slate-200 md:hidden flex flex-col items-end h-screen'
      >
        <FontAwesomeIcon
          icon={faXmark}
          size='2xl'
          className='ps-2 mb-2 cursor-pointer'
          onClick={onModalClick}
        />
        <div className='w-full'>
          <div className='mt-1 border-b-[1px] border-slate-400'>
            <PageNavList />
          </div>
          {/* Will show only at HOME */}
          <MainNavList />
          {/* Needs to show only ad admin */}
          <Footer />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ type: easeIn, duration: 0.1 }}
        className='fixed top-0 left-0 w-full h-screen z-20 bg-slate-950/50 cursor-pointer'
        onClick={onModalClick}
      ></motion.div>
    </>
  );
  const modalElement = document.getElementById('modalbackdrop');
  if (!modalElement) return null; // or return some fallback component
  return ReactDOM.createPortal(modalScreen, modalElement);
};

export default MobileNav;
