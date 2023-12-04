import { useContext, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../UI-components/Button';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import FormInput from './FormInput';

export const AdminLogin = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const onLoginSubmitHandler = () => {
    console.log('Login submitted');
    setUser({ name: 'Alex', email: 'alex@alex.com' });
    navigate('/admin/new-chapter');
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
      <div className="mt-6 space-y-4 rounded-xl bg-slate-300 p-6 sm:p-8 md:space-y-6">
        <form className="" action="#" onSubmit={onLoginSubmitHandler}>
          <FormInput
            label="El teu email"
            name="email"
            type="email"
            placeholder="email@email.com"
            inputRef={emailRef}
          />
          <FormInput
            label="Contrasenya"
            name="password"
            type="password"
            placeholder="••••••••"
            inputRef={passwordRef}
          />
          <div className="my-3 w-full">
            <a
              href="#"
              className="block text-sm font-medium hover:font-semibold hover:underline"
            >
              He oblidat la contrasenya
            </a>
            <Button type="submit" title="Accedir" />
          </div>
        </form>
        <p className="text-sm font-light">
          No estàs registrat?{' '}
          <Link
            className="font-bold hover:underline hover:underline-offset-4 hover:decoration-[3px]"
            to="/admin/register"
          >
            Crear usuari
          </Link>
        </p>
      </div>
    </motion.div>
  );
};

export default AdminLogin;
