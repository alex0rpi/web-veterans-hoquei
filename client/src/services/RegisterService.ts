type TRegisterProps = {
  name: string | undefined;
  email: string | undefined;
  password: string | undefined;
  confirmPassword: string | undefined;
};

const RegisterService = async (props: TRegisterProps) => {
  const { email, name, password, confirmPassword } = props;
  if (password !== confirmPassword) {
    alert('Les contrasenyes no coincideixen');
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
      return;
    }
    const data = await response.json();
    console.log('data-received: ', data);
    return data;
  } catch (error) {
    // show an alert window with the error received from the backend
    alert('Alguna cosa ha fallat, sisplau torna-ho a provar més tard');
    return;
  }
};

export default RegisterService;
