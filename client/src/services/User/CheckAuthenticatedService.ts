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
    return false;
  }
};

export default CheckAuthenticatedUser;
