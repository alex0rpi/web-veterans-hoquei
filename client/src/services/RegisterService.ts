import { toast } from 'react-toastify';

type TRegisterProps = {
  name: string | undefined;
  email: string | undefined;
  password: string | undefined;
  confirmPassword: string | undefined;
};

const RegisterService = async (props: TRegisterProps) => {
  const { email, name, password, confirmPassword } = props;
  if (password !== confirmPassword) {
    toast.warning('Les contrasenyes no coincideixen');
    return;
  }

  try {
    const response = await fetch('/api/users/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        email,
        password,
        confirmPassword,
      }),
    });
    if (!response.ok) {
      const error = await response.json();
      alert(error.message);
      return false;
    }

    return true;
  } catch (error) {
    toast.warning('Alguna cosa ha fallat, sisplau torna-ho a provar més tard.');
    return false;
  }
};

export default RegisterService;
