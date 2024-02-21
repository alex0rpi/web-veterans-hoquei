import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FormInput from '../UI-components/FormInput';
import { Button } from '../UI-components/Button';

const AdminData = () => {
  const userNameRef = useRef<HTMLInputElement>(null);
  const userEmailRef = useRef<HTMLInputElement>(null);
  const userPasswordRef = useRef<HTMLInputElement>(null);

  const onUserDataChangeHandler = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    toast.info('Dades actualitzades correctament.');
  };

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
      <h1 className='mt-10 border-b border-gray-400 pb-2 text-4xl font-medium text-gray-700'>
        Les meves dades
      </h1>
      <div className='mt-6 rounded-xl bg-slate-300 p-6 sm:p-8 md:space-y-6'>
        <form onSubmit={onUserDataChangeHandler}>
          <div className='mb-3'>
            <FormInput
              label='Canviar el meu nom'
              name='name'
              type='text'
              placeholder=''
              inputRef={userNameRef}
            />
            <FormInput
              label='Canviar el meu email'
              name='email'
              type='email'
              placeholder=''
              inputRef={userEmailRef}
            />
            <FormInput
              label='Canviar el meu password'
              name='password'
              type='password'
              placeholder='••••••••'
              inputRef={userPasswordRef}
            />
          </div>

          <Button type='submit' title='DESAR NOVES DADES' />
        </form>
      </div>
    </motion.div>
  );
};

export default AdminData;
