import { toast } from 'react-toastify';
import { urls } from '../../constants';

const LogoutService = async () => {
  try {
    const response = await fetch(urls.logOut, {
      method: 'GET',
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

export default LogoutService;
