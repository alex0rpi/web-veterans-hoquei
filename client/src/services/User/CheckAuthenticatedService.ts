import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { urls } from '../../constants';
import { TUser } from '../../types/Item-types';

const CheckAuthenticatedUser = async () => {
  try {
    const response = await fetch(urls.getMe, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include', // Incluir cookies en solicitudes a dominios diferentes
    });
    if (!response.ok) {
      return false;
    }

    const data = (await response.json()) as Omit<TUser, 'isAuthenticated'>;
    return data;
  } catch (error) {
    toast.warning('Alguna cosa ha fallat, sisplau torna-ho a provar més tard.');
    return false;
  }
};

export default CheckAuthenticatedUser;
