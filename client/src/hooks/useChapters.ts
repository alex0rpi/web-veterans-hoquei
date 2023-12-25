import { useContext, useEffect, useState } from 'react';
import { ChapterContext } from '../context/ChaptersContext';
import GetChaptersService from '../services/GetChaptersService';

const useChapters = () => {
  const { chapters, setChapters } = useContext(ChapterContext);
  const [isLoading, setIsLoading] = useState(false);
  const [hasFetched, setHasFetched] = useState(false);

  useEffect(() => {
    const fetchChapters = async () => {
      setIsLoading(true);
      const fetchedChapters = await GetChaptersService();
      if (fetchedChapters) {
        setChapters(fetchedChapters);
      }
      setIsLoading(false);
      setHasFetched(true);
    };
    if (!chapters || (chapters.length === 0 && !hasFetched)) {
      fetchChapters();
    }
  }, [chapters, setChapters, hasFetched]);

  return { chapters, isLoading };
};

export default useChapters;
