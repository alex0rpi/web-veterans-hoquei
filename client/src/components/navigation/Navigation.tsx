import logoImage from '../../assets/logos/logo-no-text-removebg.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
// import { useState } from 'react';
// import { Backdrop } from '../UI-components/Backdrop';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { useContext, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import LogoutService from '../../services/LogoutService';
import { paths } from '../../constants';
import MainNavList from './MainNavList';
import AdminNavList from './AdminNavList';
import Footer from './Footer';
import PageNavList from './pageNavList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

type TNavigationProps = {
  homeRef?: React.RefObject<HTMLDivElement>;
  associationRef?: React.RefObject<HTMLDivElement>;
  boardRef?: React.RefObject<HTMLDivElement>;
  bookRef?: React.RefObject<HTMLDivElement>;
  seasonsRef?: React.RefObject<HTMLDivElement>;
  relatedLinksRef?: React.RefObject<HTMLDivElement>;
  locationRef?: React.RefObject<HTMLDivElement>;
  contactRef?: React.RefObject<HTMLDivElement>;
};

export const Navigation = ({
  homeRef,
  associationRef,
  boardRef,
  bookRef,
  seasonsRef,
  locationRef,
  relatedLinksRef,
  contactRef,
}: TNavigationProps) => {
  const [show, setShow] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const onLogoutHandler = async () => {
    const isSuccess = await LogoutService();
    if (isSuccess) {
      setUser({ id: '', name: '', isVerified: false });
      toast.info('Usuari desconnectat.');
      navigate(`${paths.home}`);
    }
  };
  const location = useLocation();
  const isBookPage = location.pathname === paths.book;

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
          href='/'
          className='px-0 py-1 transition duration-200 md:py-2 hover:scale-95'
        >
          <img
            src={logoImage}
            className='h-14 brightness-125 md:h-24 object-fit'
            alt='logo-associació-veterans-hoquei-patins-fcb'
          />
        </a>
        {/* Logo and hamburguer / cross icons */}
        {!show ? (
          <FontAwesomeIcon
            icon={faBars}
            size='xl'
            className='z-50 cursor-pointer px-8 md:hidden text-slate-200'
            // onClick={menuClickHandler}
          />
        ) : (
          <FontAwesomeIcon
            icon={faXmark}
            size='2xl'
            className='cursor-pointer px-8 md:hidden text-slate-200'
            // onClick={menuClickHandler}
          />
        )}
      </motion.div>
      <div className='hidden pe-2 pt-2 mt-0 ps-2 text-sm md:block border-t-[1px] border-slate-300'>
        <div className='border-b-[1px] border-slate-400'>
          <PageNavList homeRef={homeRef} />
        </div>
        {user.name === '' ? (
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
        ) : (
          <AdminNavList onLogout={onLogoutHandler} />
        )}
      </div>
      <Footer />
    </nav>
  );
};

// {show && (
//   <>
//     {/* <Backdrop onClick={menuClickHandler} /> */}
//     <motion.div
//       initial={{ x: '100vw', opacity: 0 }}
//       animate={{ x: '40vw', opacity: 1 }}
//       exit={{ x: '100vw', opacity: 0 }}
//       transition={{ duration: 0.2 }}
//       className='fixed transform translate-x-full md:translate-x-0 top-20 z-50 w-[60vw] bg-primary px-8 pb-2 pt-2 text-slate-200 md:hidden'
//     >
//       {user.name === '' ? (
//         <MainNavList
//           homeRef={homeRef}
//           associationRef={associationRef}
//           seasonsRef={seasonsRef}
//           contactRef={contactRef}
//           bookRef={bookRef}
//           boardRef={boardRef}
//           locationRef={locationRef}
//         />
//       ) : (
//         <AdminNavList onLogout={onLogoutHandler} />
//       )}
//     </motion.div>
//   </>
// )}
