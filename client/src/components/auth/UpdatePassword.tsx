import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { paths } from '../../constants';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UpdatePasswordService from '../../services/User/UpdatePasswordService';
import { Button, FormInput, Spinner } from '../UI-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { PageTitle } from '../main';

const UpdatePassword = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const [requestStatus, setRequestStatus] = useState({
    submitted: false,
    isLoading: false,
    error: false,
  });

  useEffect(() => {
    if (passwordRef.current) {
      passwordRef.current.focus();
    }
  }, []);

  const onResetPasswordSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    setRequestStatus({ submitted: true, isLoading: true, error: false });
    const resetToken: string | null = searchParams.get('resetToken') ?? null;
    const newPassword = passwordRef.current?.value;
    const confirmNewPassword = confirmPasswordRef.current?.value;

    if (newPassword !== confirmNewPassword) {
      toast.warning('Les contrasenyes no coincideixen.');
      return;
    }

    if (
      !newPassword ||
      !confirmNewPassword ||
      newPassword.trim() === '' ||
      confirmNewPassword.trim() === ''
    ) {
      setRequestStatus({ submitted: false, isLoading: false, error: false });
      toast.warning('Els camps de contrasenya no poden estar buits.');
      return;
    }

    if (!resetToken) {
      setRequestStatus({ submitted: true, isLoading: false, error: true });
      toast.warning("No s'ha pogut verificar l'autenticitat.");
      setTimeout(() => {
        return navigate(paths.login);
      }, 3000);
    } else {
      const isSuccess = await UpdatePasswordService({
        newPassword,
        confirmNewPassword,
        resetToken,
      });
      if (isSuccess) {
        setRequestStatus({ submitted: true, isLoading: false, error: false });
        toast.info('Contrasenya actualitzada correctament.');
      }
      setTimeout(() => {
        return navigate(paths.login);
      }, 2500);
    }
  };

  return (
    <>
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
        <PageTitle titleText='Crea una nova contrasenya' />
        <div className='mt-6 space-y-4 rounded-xl bg-slate-300 p-6 sm:p-8 md:space-y-6'>
          <form onSubmit={onResetPasswordSubmitHandler}>
            <FormInput
              label='Contrasenya'
              name='password'
              type='password'
              placeholder='••••••••'
              inputRef={passwordRef}
            />
            <FormInput
              label='Confirma la contrasenya'
              name='confirm-password'
              type='password'
              placeholder='••••••••'
              inputRef={confirmPasswordRef}
            />
            <div className='my-3 w-full'>
              <Button type='submit' title='Actuatliza contrasenya' />
            </div>
          </form>
        </div>
      </motion.div>
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
        {requestStatus.submitted ? (
          requestStatus.isLoading ? (
            <>
              <div></div>
              <div className='flex items-center justify-center mt-12'>
                <Spinner />
              </div>
              <div></div>
            </>
          ) : requestStatus.error ? (
            <>
              <h1 className='text-4xl font-medium text-gray-700 mt-4'>
                <span className='text-rose-800 font-bold'>
                  Hi ha hagut un error.
                </span>{' '}
                No s'ha pogut enviar sol·licitud.
              </h1>
              <h1 className='text-3xl text-gray-700 mt-2'>
                En uns segons serà redireccionat al login...
              </h1>
            </>
          ) : (
            <>
              <div className='flex flex-row items-center justify-start'>
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  style={{ color: '#37816a' }}
                  size='2xl'
                  className='mx-2'
                />
                <h1 className='text-3xl font-medium text-gray-700 mt-4'>
                  Contrasenya actualitzada correctament.
                </h1>
              </div>
              <h1 className='text-2xl text-gray-700 mt-2'>
                En uns segons serà redireccionat al login...
              </h1>
            </>
          )
        ) : null}
      </motion.div>
    </>
  );
};

export default UpdatePassword;
