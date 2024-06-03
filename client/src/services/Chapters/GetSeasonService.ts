import { urls } from '../../constants';

const GetSeasonService = async (season: string) => {
  try {
    const response = await fetch(`${urls.getChapterBySeason}/${season}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    if (!response.ok) {
      return false;
    }
    const data = await response.json();

    return data;
  } catch (error) {
    return false;
  }
};

export default GetSeasonService;
