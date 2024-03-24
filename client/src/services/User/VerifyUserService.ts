import { toast } from 'react-toastify';
import { urls } from '../../constants';

const VerifyUserService = async (emailToken: string) => {
  if (!emailToken) {
    toast.warning('Alguna cosa ha fallat, sisplau torna-ho a provar més tard.');
    return false;
  }

  try {
    const response = await fetch(urls.emailVerify, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        emailToken,
      }),
    });
    if (!response.ok) {
      return false;
    }
    return true;
  } catch (error) {
    return false;
  }
};

export default VerifyUserService;
