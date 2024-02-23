// import logoImage from '../../../public/assets/logos/logo-no-text-removebg.png';
import logoImage from '../../assets/logos/logo-no-text-removebg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Backdrop } from '../UI-components/Backdrop';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import LogoutService from '../../services/LogoutService';
import { paths } from '../../constants';
import Footer from './Footer';
import MainNavList from './MainNavList';
import AdminNavList from './AdminNavList';

type TNavigationProps = {
  associationRef?: React.RefObject<HTMLDivElement>;
  seasonsRef?: React.RefObject<HTMLDivElement>;
  contactRef?: React.RefObject<HTMLDivElement>;
  locationRef?: React.RefObject<HTMLDivElement>;
  boardRef?: React.RefObject<HTMLDivElement>;
  bookRef?: React.RefObject<HTMLDivElement>;
};

export const Navigation = ({
  associationRef,
  seasonsRef,
  contactRef,
  locationRef,
  boardRef,
  bookRef,
}: TNavigationProps) => {
  const [show, setShow] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const menuClickHandler = () => {
    setShow((prevState) => !prevState);
  };

  const onLogoutHandler = async () => {
    const isSuccess = await LogoutService();
    if (isSuccess) {
      setUser({ id: '', name: '', isVerified: false });
      toast.info('Usuari desconnectat.');
      navigate(`${paths.home}`);
    }
  };

  return (
    <>
      <div className='fixed md:h-screen md:col-span-1 md:col-start-1 md:flex md:justify-end opacity-[92]'>
        <nav className='w-full min-w-fit bg-primary text-right text-slate-200 relative'>
          <motion.div
            initial={{ x: '100%', opacity: 0.2 }}
            animate={{ x: '0%', opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 200,
              damping: 10,
            }}
          >
            {/* Logo and hamburguer / cross icons */}
            <div className='flex items-center justify-between md:justify-center'>
              {/* Logo always visible but variable */}
              <a href='/' className='px-4 py-1 transition duration-200 md:py-2'>
                <img
                  src={logoImage}
                  className='h-14 brightness-125 md:h-24'
                  alt='rink-hockey-logo'
                />
              </a>
              {!show ? (
                <FontAwesomeIcon
                  icon={faBars}
                  size='xl'
                  className='z-50 cursor-pointer px-8 md:hidden'
                  onClick={menuClickHandler}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faXmark}
                  size='2xl'
                  className='cursor-pointer px-8 md:hidden'
                  onClick={menuClickHandler}
                />
              )}
            </div>
          </motion.div>
          <div className='hidden w-full pe-2 pt-2 mt-0 ps-2 text-sm md:block border-t-[1px] border-slate-300'>
            {user.name === '' ? (
              <MainNavList
                associationRef={associationRef}
                seasonsRef={seasonsRef}
                contactRef={contactRef}
                bookRef={bookRef}
                boardRef={boardRef}
                locationRef={locationRef}
              />
            ) : (
              <AdminNavList onLogout={onLogoutHandler} />
            )}
          </div>
          <Footer />
        </nav>
      </div>
      {/* Mobile side menu */}
      {show && (
        <>
          <Backdrop onClick={menuClickHandler} />
          <motion.div
            initial={{ x: '100vw', opacity: 0 }}
            animate={{ x: '40vw', opacity: 1 }}
            exit={{ x: '100vw', opacity: 0 }}
            transition={{ duration: 0.2 }}
            className='fixed transform translate-x-full md:translate-x-0 top-20 z-50 w-[60vw] bg-primary px-8 pb-2 pt-2 text-slate-200 md:hidden'
          >
            {user.name === '' ? (
              <MainNavList
                associationRef={associationRef}
                seasonsRef={seasonsRef}
                contactRef={contactRef}
                bookRef={bookRef}
                boardRef={boardRef}
                locationRef={locationRef}
              />
            ) : (
              <AdminNavList onLogout={onLogoutHandler} />
            )}
          </motion.div>
        </>
      )}
    </>
  );
};
