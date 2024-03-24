import { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button, FormInput, PageTitle } from '../UI-components';
import RegisterService from '../../services/User/RegisterService';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { registerSchema } from '../../validation';
import { Formik } from 'formik';
import { TRegisterForm } from '../../types/Item-types';
import { paths } from '../../constants';

const AdminRegister = () => {
  const initialValues: TRegisterForm = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    formError: null,
  };

  const navigate = useNavigate();

  const onRegisterHandler = async (values: TRegisterForm) => {
    const formState = {
      name: values.name.trim(),
      email: values.email.trim(),
      password: values.password.trim(),
      confirmPassword: values.confirmPassword.trim(),
    };
    const isSuccess = await RegisterService(formState);
    if (isSuccess) {
      // toast.info('Nou usuari registrat.');
      toast.info('Verifica el teu email per activar el compte.');
      navigate(paths.login);
      return;
    }
  };

  // Auto-focus name input
  const nameInputRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    if (nameInputRef.current) {
      nameInputRef.current.focus();
    }
  }, []);

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
      <PageTitle titleText='Registrar nou membre' />

      <div className='mt-6 space-y-4 rounded-xl bg-slate-300 p-6 sm:p-8 md:space-y-6'>
        <Formik
          initialValues={initialValues}
          validationSchema={registerSchema}
          onSubmit={onRegisterHandler}
        >
          {(formik) => {
            return (
              <form onSubmit={formik.handleSubmit}>
                <FormInput
                  label='El teu nom'
                  name='name'
                  type='name'
                  placeholder='Nom'
                  error={formik.touched.name ? formik.errors.name : undefined}
                  check={formik.touched.name && !formik.errors.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  inputRef={nameInputRef}
                />
                <FormInput
                  label='El teu email'
                  name='email'
                  type='email'
                  placeholder='email@email.com'
                  error={formik.touched.email ? formik.errors.email : undefined}
                  check={formik.touched.email && !formik.errors.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                <FormInput
                  label='Contrasenya'
                  name='password'
                  type='password'
                  placeholder='abcABC123!'
                  error={
                    formik.touched.password ? formik.errors.password : undefined
                  }
                  check={formik.touched.password && !formik.errors.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                <FormInput
                  label='Confirma la contrasenya'
                  name='confirmPassword'
                  type='password'
                  placeholder='••••••••'
                  error={
                    formik.touched.confirmPassword
                      ? formik.errors.confirmPassword
                      : undefined
                  }
                  check={
                    formik.touched.confirmPassword &&
                    !formik.errors.confirmPassword
                  }
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.confirmPassword}
                />
                <div className='w-full'>
                  <Button type='submit' title='Registrar' />
                </div>
              </form>
            );
          }}
        </Formik>

        <p className='text-sm font-light'>
          Ja estàs registrat?{' '}
          <Link
            className='font-bold hover:underline hover:underline-offset-4 hover:decoration-[3px]'
            to={paths.login}
          >
            Accedeix
          </Link>
        </p>
      </div>
    </motion.div>
  );
};

export default AdminRegister;
