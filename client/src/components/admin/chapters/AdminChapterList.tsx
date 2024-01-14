import { TChapterListItem } from '../../../types/Item-types';
import { useEffect, useState } from 'react';
import Spinner from '../../UI-components/loading-spinner/Spinner';
import GetUserChaptersService from '../../../services/GetUserChatpersService';
import { ChapterCard } from '../../UI-components/ChapterCard';
import { motion } from 'framer-motion';

const AdminChapterList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [chapters, setChapters] = useState<TChapterListItem[]>([]);
  useEffect(() => {
    const getChapters = async () => {
      const chapterList = await GetUserChaptersService();
      if (chapterList) {
        setIsLoading(false);
        setChapters(chapterList);
      }
    };

    getChapters();
  }, []);

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ translateX: 0, scale: 1 }}
      transition={{
        type: 'spring',
        stiffness: 250,
        damping: 30,
      }}
      exit={{ opacity: 0, x: '-100vw' }}
    >
      <h1 className="mt-10 border-b border-gray-400 pb-2 text-4xl font-medium text-gray-700">
        Els meus capítols
      </h1>
      <h1 className="mt-5 text-2xl text-gray-700">
        Selecciona un capítol per visualitzar o modificar.
      </h1>
      <section className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
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
                goTo={chapter.season}
              />
            );
          })
        )}
      </section>
    </motion.div>
  );
};

export default AdminChapterList;
