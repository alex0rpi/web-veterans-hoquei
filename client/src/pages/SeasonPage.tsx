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
import { RxFontSize } from 'react-icons/rx';
// import { RiFontSize2 } from 'react-icons/ri';

const SeasonPage = () => {
  const availableTextSizes = ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl'];

  const [textSize, setTextSize] = useState('base');

  const changeFontSizeHandler = (value: string) => {
    if (value === '=') {
      setTextSize('base');
      return;
    }
    const increase = value === '+';
    const currentIndex = availableTextSizes.findIndex((size) => size === textSize);
    if (increase) {
      if (currentIndex === availableTextSizes.length - 1) return;
      setTextSize(availableTextSizes[currentIndex + 1]);
      return;
    }
    if (currentIndex === 0) return;
    setTextSize(availableTextSizes[currentIndex - 1]);
  };

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
          <div className="mt-6 ">
            <div className="flex flex-row justify-between items-center">
              <h1 className="text-left text-lg md:text-2xl font-semibold md:font-bold text-primary">
                {season?.titlePro}
              </h1>
              <div className="flex flex-row items-center justify-center border border-gray-400 rounded-full px-3">
                <button
                  type="button"
                  className="font-bold text-2xl hover:scale-125"
                  onClick={() => changeFontSizeHandler('-')}
                >
                  -
                </button>
                <RxFontSize
                  className="mx-2 text-xl hover:scale-125"
                  onClick={() => changeFontSizeHandler('=')}
                />
                {/* <RiFontSize2 className="mx-2 text-xl" /> */}
                <button
                  type="button"
                  className="font-bold text-2xl hover:scale-125"
                  onClick={() => changeFontSizeHandler('+')}
                >
                  +
                </button>
              </div>
            </div>
            <div className="mb-2 border-b border-gray-400 pb-2"></div>
            {season?.contentPro.split('\n').map((line, i) => (
              <p key={i} className={`text-${textSize} mt-2 leading-7`}>
                {line}
              </p>
            ))}
            <h1 className="mt-6 text-left text-2xl font-semibold text-primary">
              {season?.titleBases}
            </h1>
            <div className="mb-2 border-b border-gray-400 pb-2"></div>
            {season?.contentBases.split('\n').map((line, i) => (
              <p key={i} className={`text-${textSize} mt-2 leading-7`}>
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
