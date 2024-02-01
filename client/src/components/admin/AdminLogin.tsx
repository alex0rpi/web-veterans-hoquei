import { useContext, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../UI-components/Button';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import FormInput from '../UI-components/FormInput';
import LoginService from '../../services/LoginService';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { paths } from '../../constants';

export const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const { setUser } = useContext(UserContext);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (emailRef.current) {
      emailRef.current.focus();
    }
  }, []);

  const onEmailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onLoginSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const loginInput = {
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
    };

    const user = await LoginService(loginInput);
    if (user) {
      setUser({ id: user.id, name: user.name, isVerified: user.isVerified });
      toast.info(`Benvingut ${user.name}!`);
      navigate(`${paths.userChapterList}`);
    }
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
      <h1 className="mt-10 border-b border-gray-400 pb-2 text-4xl font-medium text-gray-700">
        Accés per a membres
      </h1>
      <div className="mt-6 rounded-xl bg-slate-300 p-6 sm:p-8">
        <form className="" action="#" onSubmit={onLoginSubmitHandler}>
          <FormInput
            label="El teu email"
            name="email"
            type="email"
            placeholder="email@email.com"
            inputRef={emailRef}
            // value={email}
            onChange={onEmailChangeHandler}
          />
          <FormInput
            label="Contrasenya"
            name="password"
            type="password"
            placeholder="••••••••"
            inputRef={passwordRef}
          />
          <div className="my-2 w-full">
            <Link
              className="font-bold hover:underline hover:underline-offset-4 hover:decoration-[3px]"
              to={
                email
                  ? `${paths.requestPasswordReset}?userEmail=${email}`
                  : `${paths.requestPasswordReset}`
              }
            >
              He oblidat la contrasenya
            </Link>
          </div>
          <Button type="submit" title="Accedir" />
        </form>
        <p className="text-md font-light mt-2">
          No estàs registrat?{' '}
          <Link
            className="font-bold underline underline-offset-4 decoration-[3px] px-2 py-2 hover:border-2 border-rose-700 rounded-lg "
            to={paths.register}
          >
            Crear usuari
          </Link>
        </p>
      </div>
    </motion.div>
  );
};

export default AdminLogin;
