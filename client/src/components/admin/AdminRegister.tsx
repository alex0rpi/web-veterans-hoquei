import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../utils/Button';
import FormInput from './FormInput';
import RegisterService from '../../services/RegisterService';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

const AdminRegister = () => {
  const { setUser } = useContext(UserContext);

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  const onRegisterHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = nameRef.current?.value;
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    const confirmPassword = confirmPasswordRef.current?.value;
    const registerInput = { name, email, password, confirmPassword };
    console.log('registerInput: ', registerInput);

    const user = await RegisterService(registerInput);
    console.log('user created: ', user);

    setUser({
      name: user.name,
      email: user.email,
    });
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
        Registrar nou membre
      </h1>
      <div className="mt-6 space-y-4 rounded-xl bg-slate-300 p-6 sm:p-8 md:space-y-6">
        <form onSubmit={onRegisterHandler}>
          <FormInput
            label="El teu nom"
            name="name"
            type="name"
            placeholder="Nom"
            inputRef={nameRef}
          />
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
          <FormInput
            label="Confirma la contrasenya"
            name="confirm-password"
            type="password"
            placeholder="••••••••"
            inputRef={confirmPasswordRef}
          />
          <div className="w-full">
            <Button type="submit" title="Registrar" />
          </div>
        </form>
        <p className="text-sm font-light">
          Ja estàs registrat?
          <Link
            className="font-bold hover:underline hover:underline-offset-4 hover:decoration-[3px]"
            to="/admin/login"
          >
            Accedeix
          </Link>
        </p>
      </div>
    </motion.div>
  );
};

export default AdminRegister;
