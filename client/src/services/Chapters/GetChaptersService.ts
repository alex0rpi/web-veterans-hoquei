import { urls } from '../../constants';

const GetChaptersService = async () => {
  try {
    const response = await fetch(urls.getAllChapters, {
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

export default GetChaptersService;
