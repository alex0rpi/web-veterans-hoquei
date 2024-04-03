import { AnimatePresence, easeIn, motion } from 'framer-motion';
import MainNavList from './MainNavList';
import { TNavigationProps } from './Navigation';
import ReactDOM from 'react-dom';
import PageNavList from './PageNavList';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

type TMobileNavProps = TNavigationProps & {
  onModalClick: () => void;
};

const MobileNav = ({
  homeRef,
  associationRef,
  boardRef,
  bookRef,
  seasonsRef,
  locationRef,
  relatedLinksRef,
  contactRef,
  onModalClick,
}: TMobileNavProps) => {
  const modalScreen = (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: easeIn, duration: 0.2 }}
        exit={{ opacity: 0 }}
        className='fixed top-0 left-0 w-full h-screen z-20 bg-slate-950/50 cursor-pointer'
        onClick={onModalClick}
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, right: '-100vw' }}
        animate={{ opacity: 1, right: '55vw' }}
        exit={{ opacity: 0, right: '-100vw' }}
        transition={{ duration: 0.2 }}
        className='z-30 fixed transform translate-x-full md:translate-x-0 top-[0vh] w-[55vw] right-[40vw] bg-primary bg-opacity-95 ps-6 pe-6 pb-2 pt-4 rounded-s-lg text-slate-200 md:hidden flex flex-col items-end h-screen'
      >
        <FontAwesomeIcon
          icon={faXmark}
          size='2xl'
          className='ps-2 mb-2 cursor-pointer'
          onClick={onModalClick}
        />
        <div className='w-full'>
          <div className='mt-1 border-b-[1px] border-slate-400'>
            <PageNavList homeRef={homeRef} />
          </div>
          <MainNavList
            homeRef={homeRef}
            associationRef={associationRef}
            boardRef={boardRef}
            seasonsRef={seasonsRef}
            bookRef={bookRef}
            relatedLinksRef={relatedLinksRef}
            locationRef={locationRef}
            contactRef={contactRef}
          />
          <Footer />
        </div>
      </motion.div>
    </AnimatePresence>
  );
  const modalElement = document.getElementById('modalbackdrop');
  if (!modalElement) return null; // or return some fallback component
  return ReactDOM.createPortal(modalScreen, modalElement);
};

export default MobileNav;
