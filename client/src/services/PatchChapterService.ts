import { toast } from 'react-toastify';
import { urls } from '../constants';

type TPatchChapterProps = {
  id: string | undefined;
  season: string | undefined;
  titlePro: string | undefined;
  contentPro: string | undefined;
  titleBases: string | undefined;
  contentBases: string | undefined;
};

const EditChapterService = async (props: TPatchChapterProps) => {
  console.log('CreateChapterService');
  const { id, season, titlePro, contentPro, titleBases, contentBases } = props;
  try {
    const response = await fetch(urls.createChapter, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id,
        season,
        titlePro,
        contentPro,
        titleBases,
        contentBases,
      }),
    });
    if (!response.ok) {
      const error = await response.json();
      toast.warning(error.message);
      return false;
    }
    return true;
  } catch (error) {
    toast.warning('Alguna cosa ha fallat, sisplau torna-ho a provar més tard.');
    return false;
  }
};

export default EditChapterService;
