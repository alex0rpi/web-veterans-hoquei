import logoImage from '../../assets/logos/logo-no-text-removebg.png';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { paths } from '../../constants/index.ts';
import { MainNavList, PageNavList, Footer, MobileNav } from './index.ts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useMediaQuery } from 'react-responsive';

export type TNavigationProps = {
  homeRef?: React.RefObject<HTMLDivElement>;
  associationRef?: React.RefObject<HTMLDivElement>;
  boardRef?: React.RefObject<HTMLDivElement>;
  bookRef?: React.RefObject<HTMLDivElement>;
  seasonsRef?: React.RefObject<HTMLDivElement>;
  relatedLinksRef?: React.RefObject<HTMLDivElement>;
  locationRef?: React.RefObject<HTMLDivElement>;
  contactRef?: React.RefObject<HTMLDivElement>;
};

const NavigationBar = ({
  homeRef,
  associationRef,
  boardRef,
  bookRef,
  seasonsRef,
  locationRef,
  relatedLinksRef,
  contactRef,
}: TNavigationProps) => {
  const isMdScreenOrLarger = useMediaQuery({ minWidth: 768 });
  const [show, setShow] = useState(false);

  const location = useLocation();
  const isBookPage = location.pathname === paths.book;

  const menuClickHandler = () => {
    setShow((prevState) => !prevState);
  };

  const logoHeight = isBookPage ? 'h-10 md:h-24' : 'h-14 md:h-24';
  return (
    <nav className={isBookPage ? 'navBookLayout' : 'navLayout '}>
      <motion.div
        initial={{ x: '100%', opacity: 0.2 }}
        animate={{ x: '0%', opacity: 1 }}
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 10,
        }}
        className='flex items-center justify-between md:justify-center'
      >
        {/* Logo always visible but variable */}
        <a
          href={paths.home}
          className='ps-1 md:ps-0 pe-0 py-1 transition duration-200 md:py-2 hover:scale-95'
        >
          <img
            src={logoImage}
            className={`${logoHeight} brightness-125  w-full object-fit transition-all duration-200`}
            alt='logo-associació-veterans-hoquei-patins-fcb'
          />
        </a>
        {/* Hamburguer and cross icons */}
        {!show && (
          <FontAwesomeIcon
            icon={faBars}
            size='xl'
            className='z-50 cursor-pointer px-8 md:hidden text-slate-200'
            onClick={menuClickHandler}
          />
        )}
      </motion.div>
      {/* Menu Items */}
      <div className='hidden pe-2 pt-2 mt-0 ps-2 text-sm md:block border-t-[1px] border-slate-300'>
        <div className='border-b-[1px] border-slate-400'>
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
      </div>
      {isMdScreenOrLarger && <Footer />}
      {/* Mobile menu */}
      <AnimatePresence>
        {show && (
          <MobileNav
            homeRef={homeRef}
            associationRef={associationRef}
            seasonsRef={seasonsRef}
            contactRef={contactRef}
            bookRef={bookRef}
            boardRef={boardRef}
            locationRef={locationRef}
            relatedLinksRef={relatedLinksRef}
            onModalClick={menuClickHandler}
          />
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavigationBar;