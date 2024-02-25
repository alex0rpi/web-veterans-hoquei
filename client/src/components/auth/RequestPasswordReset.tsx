import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { paths } from '../../constants';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from '../UI-components/loading-spinner/Spinner';
import FormInput from '../UI-components/FormInput';
import { Button } from '../UI-components/Button';
import RequestPasswordResetService from '../../services/RequestPasswordResetService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { PageTitle } from '../main';

const RequestPasswordReset = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const userEmail: string | null = searchParams.get('userEmail') ?? null;
  const emailRef = useRef<HTMLInputElement>(null);
  const [requestStatus, setRequestStatus] = useState({
    submitted: false,
    isLoading: false,
    error: false,
  });

  useEffect(() => {
    if (emailRef.current) {
      emailRef.current.focus();
    }
  }, []);

  const onRequestPasswordResetHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    setRequestStatus({ submitted: true, isLoading: true, error: false });
    const email = emailRef.current?.value;

    if (!email) {
      setRequestStatus({ submitted: false, isLoading: false, error: false });
      toast.warning('Sisplau introdueix un email vàlid.');
      return;
    }

    const isSuccess = await RequestPasswordResetService({ email });
    if (isSuccess) {
      toast.info('Sol·licitud enviada correctament. Revisa el teu email.');
      setRequestStatus({ submitted: true, isLoading: false, error: false });
    } else {
      toast.error(
        "No s'ha pogut enviar la sol·licitud, torna-ho a provar més tard."
      );
      setRequestStatus({ submitted: true, isLoading: false, error: true });
    }
    setTimeout(() => {
      return navigate(paths.home);
    }, 2500);
  };

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
      <PageTitle titleText='Sol·licita una nova contrasenya' />
      <div className='mt-6 space-y-4 rounded-xl bg-slate-300 p-6 sm:p-8 md:space-y-6'>
        <form className='' onSubmit={onRequestPasswordResetHandler}>
          <FormInput
            label='El teu email'
            name='email'
            type='email'
            placeholder='email@email.com'
            inputRef={emailRef}
            defaultValue={userEmail ? userEmail : ''}
          />
          <div className='my-3 w-full'>
            <Button type='submit' title='Sol·licita nova contrasenya' />
          </div>
        </form>
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
              <h1 className='text-2xl font-medium text-gray-700 mt-4'>
                <span className='text-rose-800 font-bold'>
                  Hi ha hagut un error
                </span>{' '}
                no s'ha pogut enviar la sol·licitud.
              </h1>
              <h1 className='text-xl text-gray-700 mt-2'>
                En uns segons serà redireccionat al login...
              </h1>
            </>
          ) : (
            <>
              <div className='flex flex-row items-center justify-start'>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size='2xl'
                  className='mx-2 text-green-800'
                />
                <h1 className='text-2xl font-medium text-gray-700 mt-4'>
                  <span className='text-green-800 font-bold'>D'acord!</span> Hem
                  enviat un email amb instruccions per a restablir la
                  contrasenya.
                </h1>
              </div>
              <h1 className='text-xl text-gray-700 mt-2'>
                En uns segons serà redireccionat al login...
              </h1>
            </>
          )
        ) : null}
      </div>
    </motion.div>
  );
};

export default RequestPasswordReset;
