import { useEffect, useState } from 'react';
import { ChapterCard } from '../UI-components/ChapterCard';
import Spinner from '../UI-components/loading-spinner/Spinner';
import GetChaptersService from '../../services/GetChaptersService';
import { ChapterListItem } from '../../types/Item-types';

const ChapterGrid = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [chapters, setChapters] = useState<ChapterListItem[]>([]);
  useEffect(() => {
    const getChapters = async () => {
      const chapterList = await GetChaptersService();
      if (chapterList) {
        setIsLoading(false);
        setChapters(chapterList);
      }
    };

    getChapters();
  }, []);

  return (
    <section className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
      {isLoading ? (
        <>
          <div></div>
          <div className="flex items-center justify-center">
            <Spinner />
          </div>
          <div></div>
        </>
      ) : (
        chapters.map((chapter, index) => {
          return (
            <ChapterCard
              key={chapter.id}
              index={index}
              season={chapter.season}
              titlePro={chapter.titlePro}
              titleBases={chapter.titleBases}
            />
          );
        })
      )}
    </section>
  );
};

export default ChapterGrid;
