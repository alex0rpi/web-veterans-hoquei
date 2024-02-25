import { useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useSearchParams } from 'react-router-dom';
import VerifyUserService from '../../services/VerifyUserService';
import { UserContext } from '../../context/UserContext';
import { paths } from '../../constants';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from '../UI-components/loading-spinner/Spinner';
import { PageTitle } from '../main';

const UserVerify = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams] = useSearchParams();

  const emailToken: string | null = searchParams.get('emailToken') ?? null;

  useEffect(() => {
    const verifyUserEmail = async (emailToken: string | null) => {
      if (user.isVerified) {
        setTimeout(() => {
          return navigate(`${paths.login}`);
        }, 3000);
      }
      if (emailToken) {
        const success = await VerifyUserService(emailToken);
        if (!success) {
          setIsLoading(false);
          setError(true);
          setUser({ id: '', name: '', isVerified: false });
          toast.warning(`La verificació ha fallat`);
        } else {
          setIsLoading(false);
          setError(false);
          toast.success(`Usuari verificat!`);
        }
      }
      setTimeout(() => {
        return navigate(`${paths.login}`);
      }, 3000);
    };

    if (emailToken !== null) verifyUserEmail(emailToken);
  }, [emailToken]);

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ translateX: 0, scale: 1 }}
      transition={{
        type: 'spring',
        stiffness: 250,
        damping: 30,
        duration: 250,
      }}
      exit={{ opacity: 0, x: '-100vw' }}
    >
      <PageTitle titleText='Confirmació de compte' />
      {isLoading ? (
        <>
          <div></div>
          <div className='flex items-center justify-center mt-12'>
            <Spinner />
          </div>
          <div></div>
        </>
      ) : error ? (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ translateX: 0, scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 250,
            damping: 30,
            duration: 250,
          }}
          exit={{ opacity: 0, x: '-100vw' }}
        >
          <h1 className='text-4xl font-medium text-gray-700 mt-4'>
            <span className='text-rose-800 font-bold'>
              Hi ha hagut un error
            </span>{' '}
            l'usuari no ha pogut ser verificat.
          </h1>
          <h1 className='text-3xl text-gray-700 mt-2'>
            En uns segons serà redireccionat al login...
          </h1>
        </motion.div>
      ) : (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ translateX: 0, scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 250,
            damping: 30,
            duration: 250,
          }}
          exit={{ opacity: 0, x: '-100vw' }}
        >
          <h1 className='text-3xl font-medium text-gray-700 mt-4'>
            <span className='text-green-800 font-bold'>
              Usuari verificat correctament!
            </span>
          </h1>
          <h1 className='text-2xl text-gray-700 mt-2'>
            En uns segons serà redireccionat al login...
          </h1>
        </motion.div>
      )}
    </motion.div>
  );
};

export default UserVerify;
