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
import NavList from './NavList';

export const Navigation = () => {
  const [show, setShow] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const clickHandler = () => {
    setShow((prevState) => !prevState);
  };

  const onLogoutHandler = async () => {
    const isSuccess = await LogoutService();
    if (isSuccess) {
      setUser({ id: '', name: '' });
      toast.info('Usuari desconnectat.');
      navigate('/');
    }
  };

  return (
    <>
      <div className="md:col-span-1 md:col-start-2 md:flex md:justify-end opacity-90">
        <nav className="w-full min-w-fit bg-primary text-right text-slate-200">
          <motion.div
            initial={{ x: '100%', opacity: 0.2 }}
            animate={{ x: '0%', opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 200,
              damping: 10,
            }}
          >
            <div className="flex items-center justify-between md:justify-center">
              <a
                href="/"
                className="px-4 py-1 transition duration-200 hover:scale-95 active:scale-100 md:py-2"
              >
                <img src={logoImage} className="h-14 brightness-125 md:h-24" alt="logo" />
              </a>
              {/* For small screens */}
              {!show ? (
                // Hamburguer icon
                <FontAwesomeIcon
                  icon={faBars}
                  size="xl"
                  className="z-50 cursor-pointer px-8 transition duration-200 md:hidden"
                  onClick={clickHandler}
                />
              ) : (
                // Close icon
                <FontAwesomeIcon
                  icon={faXmark}
                  size="2xl"
                  className="z-50 cursor-pointer px-8 transition duration-200 hover:scale-95 active:scale-100 md:hidden"
                  onClick={clickHandler}
                />
              )}
            </div>
          </motion.div>
          <div className="hidden w-full pe-2 pt-2 mt-0 ps-5 text-sm md:block border-t-2 border-gray-300">
            {user.name === '' ? (
              <NavList mode="main" onLogout={onLogoutHandler} />
            ) : (
              <NavList mode="admin" onLogout={onLogoutHandler} />
            )}
          </div>
        </nav>
      </div>
      {show && (
        <>
          <Backdrop onClick={clickHandler} />

          <motion.div
            initial={{ x: '100vw', opacity: 0 }}
            animate={{ x: '40vw', opacity: 1 }}
            exit={{ x: '100vw', opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 z-50 w-[60vw] rounded-l-xl bg-primary px-8 pb-2 pt-2 text-slate-200 md:hidden"
          >
            {user.name === '' ? (
              <NavList mode="main" onLogout={onLogoutHandler} />
            ) : (
              <NavList mode="admin" onLogout={onLogoutHandler} />
            )}
          </motion.div>
        </>
      )}
    </>
  );
};
