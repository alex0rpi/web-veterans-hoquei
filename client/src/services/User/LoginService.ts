import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { urls } from '../../constants';

type TRegisterProps = {
  email: string | undefined;
  password: string | undefined;
};

const LoginService = async (props: TRegisterProps) => {
  const { email, password } = props;

  try {
    const response = await fetch(urls.logIn, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    if (!response.ok) {
      const errorData = await response.json();
      console.log('error', errorData);
      toast.warning(errorData.error);
      return false;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    toast.warning('Alguna cosa ha fallat, sisplau torna-ho a provar més tard.');
    return false;
  }
};

export default LoginService;
