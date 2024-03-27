import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, FormInput, PageTitle, Spinner } from '../UI-components';
import { TUpdateUserForm } from '../../types/Item-types';
import GetUserInfosService from '../../services/User/GetUserInfosService';
import { paths } from '../../constants';
import PatchUserService from '../../services/User/PatchUserService';

const AdminData = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [initialValues, setInitialValues] = useState<TUpdateUserForm>({
    name: '',
    email: '',
  });
  const [nameInput, setNameInput] = useState<string | undefined>(undefined);
  const [emailInput, setEmailInput] = useState<string | undefined>(undefined);
  const [nameError, setNameError] = useState<string | undefined>(undefined);
  const [emailError, setEmailError] = useState<string | undefined>(undefined);
  const [formIsValid, setFormIsValid] = useState<boolean>(false);

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
      setNameInput(fetchedUser.name);
      setEmailInput(fetchedUser.email);

      setIsLoading(false);
      toast.info('Emplena els camps que vulguis actualitzar');
    };

    fetchUser();
  }, []);

  const validateChanges = ({ name, email }: TUpdateUserForm) => {
    let isValidName = true;
    let isValidEmail = true;

    if (name && name.trim().length > 0) {
      if (name.trim().length < 2) {
        setNameError('El nom ha de tenir com a mínim 2 caràcters');
        isValidName = false;
      } else if (name.trim().length > 50) {
        setNameError('El nom ha de tenir com a màxim 50 caràcters');
        isValidName = false;
      } else {
        setNameError(undefined);
      }
    }
    if (email && email.trim().length > 0) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      isValidEmail = emailRegex.test(email);
      if (!isValidEmail) {
        setEmailError("L'email de moment no és vàlid");
      } else {
        setEmailError(undefined);
      }
    }
    setFormIsValid(isValidName && isValidEmail);
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.name === 'name') {
      setNameInput(e.target.value);
      validateChanges({ name: e.target.value, email: emailInput ?? '' });
    }
    if (e.target.name === 'email') {
      setEmailInput(e.target.value);
      validateChanges({ name: nameInput ?? '', email: e.target.value });
    }
  };

  const onSubmitUpdateHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    // Construye objeto con los valores que se quieren actualizar
    e.preventDefault();
    const name = nameInput;
    const email = emailInput;
    const isSuccess = await PatchUserService({ name, email });
    if (isSuccess) {
      toast.info('Dades actualitzades correctament.');
      return;
    }
    toast.error('Hi ha hagut un error al actualitzar les dades.');
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
          <form onSubmit={onSubmitUpdateHandler}>
            <FormInput
              label='Modifica el teu nom'
              name='name'
              type='name'
              placeholder='Nom'
              error={nameError}
              check={!nameError}
              onChange={onChangeHandler}
              // onBlur={''}
              value={nameInput ?? initialValues.name}
              inputRef={nameInputRef}
            />
            <FormInput
              label='Modifica el teu email'
              name='email'
              type='email'
              placeholder='email@email.com'
              error={emailError}
              check={!emailError}
              onChange={onChangeHandler}
              // onBlur={''}
              value={emailInput ?? initialValues.email}
            />
            <div className='w-full'>
              <Button
                type='submit'
                title='Desar canvis'
                disabled={!formIsValid}
              />
            </div>
          </form>
        )}
      </div>
    </motion.div>
  );
};

export default AdminData;
