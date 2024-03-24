import { useContext, useEffect, useState } from 'react';
import { ChapterContext } from '../context/ChaptersContext';
import GetChaptersService from '../services/Chapters/GetChaptersService';

const useChapters = () => {
  const { chapters, setChapters } = useContext(ChapterContext);
  const [isLoading, setIsLoading] = useState(false);
  const [hasFetchedChapters, setHasFetched] = useState(false);

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
    if (!chapters || (chapters.length === 0 && !hasFetchedChapters)) {
      fetchChapters();
    }
  }, [chapters, setChapters, hasFetchedChapters]);

  return { chapters, isLoading, hasFetchedChapters, setHasFetched };
};

export default useChapters;
