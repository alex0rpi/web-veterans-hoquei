import { urls } from '../../constants';

type TPatchChapterProps = {
  id: string | undefined;
  season: string | undefined;
  titlePro: string | undefined;
  contentPro: string | undefined;
  titleBases: string | undefined;
  contentBases: string | undefined;
};

const EditChapterService = async (props: TPatchChapterProps) => {
  const { id, season, titlePro, contentPro, titleBases, contentBases } = props;
  try {
    const response = await fetch(urls.patchChapter, {
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
      return error;
    }
    return true;
  } catch (error) {
    return false;
  }
};

export default EditChapterService;
