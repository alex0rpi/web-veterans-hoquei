import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, FormInput, PageTitle, Spinner } from '../UI-components';
import { Formik } from 'formik';
import { modifyUserSchema } from '../../validation/modifyUserSchema';
import { TUpdateUserForm } from '../../types/Item-types';
import GetUserInfosService from '../../services/User/GetUserInfosService';
import { paths } from '../../constants';
import PatchUserService from '../../services/User/PatchUserService';

const AdminData = () => {
  const navigate = useNavigate();
  const [initialValues, setInitialValues] = useState<TUpdateUserForm>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const fetchedUser = await GetUserInfosService();
      if (!fetchedUser) {
        setIsLoading(false);
        toast.error('Hi ha hagut un error al carregar les dades)');
        toast.info('Serà redirigit al inici de sessió.');
        setTimeout(() => {
          return navigate(paths.login);
        }, 3000);
      }
      setInitialValues({
        ...initialValues,
        name: fetchedUser.name,
        email: fetchedUser.email,
      });
      setIsLoading(false);
      toast.info('Emplena els camps que vulguis actualitzar');
    };

    fetchUser();
  }, []);

  const onUserUpdateHandler = async (values: TUpdateUserForm) => {
    const userUpdateInput = {
      name: values.name,
      email: values.email,
      password: values.password,
      confirmPassword: values.confirmPassword,
    };
    const isSuccess = await PatchUserService(userUpdateInput);
    if (isSuccess) toast.info('Dades actualitzades correctament.');
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
      }}
      exit={{ opacity: 0, x: '-100vw' }}
    >
      <PageTitle titleText='Modificar les meves dades' />

      <div className='mt-6 rounded-xl bg-slate-300 p-6 sm:p-8 md:space-y-6'>
        {isLoading ? (
          <>
            <div></div>
            <div className='flex items-center justify-center'>
              <Spinner />
            </div>
            <div></div>
          </>
        ) : (
          <Formik
            enableReinitialize={true}
            initialValues={initialValues}
            validationSchema={modifyUserSchema}
            onSubmit={onUserUpdateHandler}
          >
            {(formik) => {
              return (
                <form onSubmit={formik.handleSubmit}>
                  <FormInput
                    label='Modifica el teu nom'
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
                    label='Modifica el teu email'
                    name='email'
                    type='email'
                    placeholder='email@email.com'
                    error={
                      formik.touched.email ? formik.errors.email : undefined
                    }
                    check={formik.touched.email && !formik.errors.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  <FormInput
                    label='Canviar contrasenya'
                    name='password'
                    type='password'
                    placeholder='••••••••'
                    error={
                      formik.touched.password
                        ? formik.errors.password
                        : undefined
                    }
                    check={formik.touched.password && !formik.errors.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                  />
                  <FormInput
                    label='Confirma canvi de contrasenya'
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
        )}
      </div>
    </motion.div>
  );
};

export default AdminData;
