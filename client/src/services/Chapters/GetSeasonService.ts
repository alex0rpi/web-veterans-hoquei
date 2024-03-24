import { toast } from 'react-toastify';
import { urls } from '../../constants';

const GetSeasonService = async (season: string) => {
  try {
    const response = await fetch(`${urls.getChapterBySeason}/${season}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    if (!response.ok) {
      const error = await response.json();
      toast.warning(error.message);
      return false;
    }
    const data = await response.json();

    return data;
  } catch (error) {
    toast.warning('Alguna cosa ha fallat, sisplau torna-ho a provar més tard.');
    return false;
  }
};

export default GetSeasonService;
