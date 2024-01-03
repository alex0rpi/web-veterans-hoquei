import { useNavigate, useParams } from 'react-router-dom';
import { HeaderTitle } from '../components/main/HeaderTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { ChapterContext } from '../context/ChaptersContext';
import { easeInOut, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import GetSeasonService from '../services/GetSeasonService';
import { TSeason } from '../types/Item-types';
import Spinner from '../components/UI-components/loading-spinner/Spinner';
import GetChaptersService from '../services/GetChaptersService';

const SeasonPage = () => {
  const { chapters, setChapters } = useContext(ChapterContext);
  console.log('chapters: ', chapters);

  const [isLoading, setIsLoading] = useState(true);
  const [season, setSeason] = useState<TSeason | null>(null);

  const navigate = useNavigate();
  const { currentSeason } = useParams();

  useEffect(() => {
    const fetchSeason = async () => {
      console.log('currentSeason: ', currentSeason);

      const fetchedSeason = await GetSeasonService(currentSeason!);
      if (!fetchedSeason) return;
      setSeason(fetchedSeason);
      setIsLoading(false);
    };
    const populateChapters = async () => {
      const fetchedChapters = await GetChaptersService();
      setChapters(fetchedChapters);
    };

    if (!chapters || chapters.length === 0) {
      populateChapters();
    }
    fetchSeason();
  }, [chapters, currentSeason, setChapters]);

  const nextSeasonClick = () => {
    const currentSeasonIndex = chapters.findIndex(
      (chapter) => chapter.season === currentSeason
    );
    const followingSeason = chapters[currentSeasonIndex + 1]?.season;
    if (!followingSeason) return;
    navigate(`/temporades/${followingSeason}`);
  };
  const previousSeasonClick = () => {
    const currentSeasonIndex = chapters.findIndex(
      (chapter) => chapter.season === currentSeason
    );
    const previousSeason = chapters[currentSeasonIndex - 1]?.season;
    if (!previousSeason) return;
    navigate(`/temporades/${previousSeason}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: easeInOut, duration: 0.5 }}
      exit={{ opacity: 0 }}
    >
      <HeaderTitle />

      {isLoading ? (
        <>
          <div></div>
          <div className="flex items-center justify-center">
            <Spinner />
          </div>
          <div></div>
        </>
      ) : (
        <article>
          <div className="flex items-center justify-center mt-6">
            <div className="group flex items-center justify-center ">
              <FontAwesomeIcon
                icon={faChevronLeft}
                size="2xl"
                onClick={previousSeasonClick}
                className="duration-250 me-3 cursor-pointer transition ease-out group-hover:scale-125 active:scale-95"
              />
            </div>
            <h1 className="px-2 text-center text-2xl md:text-4xl lg:text-5xl font-light text-primary">
              <span
                style={{
                  userSelect: 'none',
                  msUserSelect: 'none',
                  WebkitUserSelect: 'none',
                }}
              >
                Temporada {`${season?.season}`}
              </span>
            </h1>
            <div className="group flex items-center justify-center ">
              <FontAwesomeIcon
                icon={faChevronRight}
                size="2xl"
                onClick={nextSeasonClick}
                className="duration-250 ms-3 cursor-pointer transition ease-out group-hover:scale-125 active:scale-95"
              />
            </div>
          </div>
          {/* Season text content here below */}
          <div>
            <h1 className="mt-6 text-left text-lg md:text-2xl font-semibold md:font-bold text-primary">
              {season?.titlePro}
            </h1>
            <div className="mb-2 border-b border-gray-400 pb-2"></div>
            {season?.contentPro.split('\n').map((line, i) => (
              <p key={i} className="text-md mt-2 leading-7">
                {line}
              </p>
            ))}
            <h1 className="mt-6 text-left text-2xl font-semibold text-primary">
              {season?.titleBases}
            </h1>
            <div className="mb-2 border-b border-gray-400 pb-2"></div>
            {season?.contentBases.split('\n').map((line, i) => (
              <p key={i} className="text-md mt-2 leading-7">
                {line}
              </p>
            ))}
          </div>
        </article>
      )}
    </motion.div>
  );
};

export default SeasonPage;
