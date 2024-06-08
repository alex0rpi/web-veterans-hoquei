import logoImage from '../../assets/logos/logo-no-text-removebg.png';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { paths } from '../../constants/index.ts';
import { MainNavList, PageNavList, Footer, MobileNav } from './index.ts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useMediaQuery } from 'react-responsive';

const NavigationBar = () => {
  const isMdScreenOrLarger = useMediaQuery({ minWidth: 768 });
  const [show, setShow] = useState(false);

  const menuClickHandler = () => {
    setShow((prevState) => !prevState);
  };

  const location = useLocation();
  const isBookPage = location.pathname === paths.book;
  const isHomePage = location.pathname === paths.home;

  // const logoHeight = isBookPage ? 'h-10 md:h-24' : 'h-14 md:h-24';
  const logoHeight = isBookPage ? 'h-14 md:h-24' : 'h-14 md:h-24';
  return (
    <nav className={isBookPage ? 'navBookLayout' : 'navLayout'}>
      <div className='flex items-center justify-between w-full'>
        <motion.div
          initial={{ x: '100%', opacity: 0.2 }}
          animate={{ x: '0%', opacity: 1 }}
          transition={
            isHomePage
              ? {
                  type: 'spring',
                  stiffness: 200,
                  damping: 10,
                }
              : {}
          }
          className='w-1/4 ps-4 md:px-0 md:w-auto flex justify-start md:mx-auto'
        >
          {/* Logo */}
          <a href={paths.home}>
            <img
              src={logoImage}
              className={`${logoHeight} brightness-125 object-contain transition-all duration-200`}
              alt='logo-associació-veterans-hoquei-patins-fcb'
            />
          </a>
        </motion.div>

        {/* Espacio vacío */}
        <div className='flex-grow md:hidden'></div>
        {/* <div className='flex-grow md:hidden flex items-center justify-center'>
          <p className='text-yellow-400 text-sm'>🚧Web en proves🏗️</p>
        </div> */}

        {/* Botón de hamburguesa */}
        {!show && (
          <div className='w-1/4 md:w-auto flex justify-end z-50 pe-6 md:hidden text-slate-200'>
            <FontAwesomeIcon
              icon={faBars}
              size='2xl'
              className='cursor-pointer '
              onClick={menuClickHandler}
            />
          </div>
        )}
      </div>
      {/* Vertical bar menu Items */}
      <div className='hidden pe-2 pt-2 mt-0 ps-2 text-sm md:block border-t-[1px] border-slate-300'>
        <div className='border-b-[1px] border-slate-400'>
          <PageNavList />
        </div>
        <MainNavList />
      </div>
      {isMdScreenOrLarger && <Footer />}
      {/* Mobile menu */}
      <AnimatePresence>{show && <MobileNav onModalClick={menuClickHandler} />}</AnimatePresence>
    </nav>
  );
};

export default NavigationBar;
