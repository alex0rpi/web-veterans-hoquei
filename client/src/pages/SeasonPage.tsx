import { useNavigate, useParams } from 'react-router-dom';
import { HeaderTitle } from '../components/main';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCat,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { ChapterContext } from '../context/ChaptersContext';
import { AnimatePresence, easeInOut, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import GetSeasonService from '../services/Chapters/GetSeasonService';
import Spinner from '../components/UI-components/loading-spinner/Spinner';
import GetChaptersService from '../services/Chapters/GetChaptersService';
import { RxFontSize } from 'react-icons/rx';
import { TChapter } from '../types/Item-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BadgeClickable } from '../components/UI-components';

const SeasonPage = () => {
  const availableTextSizes = ['xs', 'sm', 'base', 'lg', 'xl', '2xl'];
  const [textSize, setTextSize] = useState('base');
  const changeFontSizeHandler = (value: string) => {
    if (value === '=') {
      setTextSize('base');
      return;
    }
    const increase = value === '+';
    const currentIndex = availableTextSizes.findIndex(
      (size) => size === textSize
    );

    if (increase) {
      if (currentIndex < availableTextSizes.length - 1) {
        setTextSize(availableTextSizes[currentIndex + 1]);
      }
    } else {
      if (currentIndex > 0) {
        setTextSize(availableTextSizes[currentIndex - 1]);
      }
    }
  };
  // const [direction, setDirection] = useState<number>(0);

  const { chapters, setChapters } = useContext(ChapterContext);
  const [isLoading, setIsLoading] = useState(true);
  const [season, setSeason] = useState<TChapter | null>(null);

  const navigate = useNavigate();
  const { currentSeason } = useParams();

  useEffect(() => {
    const fetchSeason = async () => {
      const fetchedSeason = await GetSeasonService(currentSeason!);
      if (!fetchedSeason) return;
      setSeason(fetchedSeason);
      setIsLoading(false);
    };
    const populateChapters = async () => {
      const fetchedChapters = await GetChaptersService();
      if (!fetchedChapters || fetchedChapters.length === 0) {
        toast.warning('Per ara no hi ha cap temporada per mostrar.');
        setChapters([]);
        setIsLoading(false);
        return;
      }
      setChapters(fetchedChapters);
    };

    if (!chapters || chapters.length === 0) {
      populateChapters();
    }
    fetchSeason();
  }, [currentSeason]);
  const isLastSeason =
    chapters?.findIndex((chapter) => chapter.season === currentSeason) ===
    chapters?.length - 1;

  const isFirstSeason =
    chapters?.findIndex((chapter) => chapter.season === currentSeason) === 0;

  const nextSeasonClick = () => {
    // setDirection(1);
    if (!chapters || chapters.length === 0) return;
    const currentSeasonIndex = chapters?.findIndex(
      (chapter) => chapter.season === currentSeason
    );
    if (currentSeasonIndex === -1) return;
    const followingSeason = chapters[currentSeasonIndex + 1]?.season;
    if (!followingSeason) return;
    navigate(`/temporades/${followingSeason}`);
  };
  const previousSeasonClick = () => {
    // setDirection(-1);
    if (!chapters || chapters.length === 0) return;
    const currentSeasonIndex = chapters?.findIndex(
      (chapter) => chapter.season === currentSeason
    );
    if (currentSeasonIndex === -1) return;
    const previousSeason = chapters[currentSeasonIndex - 1]?.season;
    if (!previousSeason) return;
    navigate(`/temporades/${previousSeason}`);
  };

  const onBadgeClickHandler = (clickedSeason: string) => {
    if (currentSeason) {
      if (+clickedSeason.split(' ')[1] > +currentSeason?.split('-')[1]) {
        // setDirection(1);
        navigate(`/temporades/${clickedSeason}`);
      } else {
        // setDirection(-1);
        navigate(`/temporades/${clickedSeason}`);
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: easeInOut, duration: 0.2 }}
      exit={{ opacity: 0 }}
    >
      <HeaderTitle />
      <div className='flex justify-center items-center mt-2'>
        {chapters?.map((chapter, index) => (
          <BadgeClickable
            key={chapter.season}
            season={chapter.season}
            index={index}
            currentElement={currentSeason!}
            clickHandler={() => onBadgeClickHandler(chapter.season)}
          />
        ))}
      </div>
      <AnimatePresence mode='wait'>
        {isLoading ? (
          <>
            <div></div>
            <div className='flex items-center justify-center'>
              <Spinner />
            </div>
            <div></div>
          </>
        ) : season ? (
          <motion.article
            key={currentSeason}
            initial={{
              opacity: 0,
              // x: 300 * direction
            }}
            animate={{
              opacity: 1,
              // x: 0,
            }}
            exit={{
              opacity: 0,
              // x: -300 * direction,
            }}
            transition={{ duration: 0.25 }}
          >
            <div className='flex items-center justify-center mt-2'>
              {!isFirstSeason && (
                <div className='group flex items-center justify-center '>
                  <FontAwesomeIcon
                    icon={faChevronLeft}
                    size='2xl'
                    onClick={previousSeasonClick}
                    className='duration-250 me-3 cursor-pointer transition ease-out group-hover:scale-125 active:scale-95 group-hover:-translate-x-1'
                  />
                </div>
              )}
              <h1 className='max-w-xl px-2 text-center text-2xl md:text-4xl lg:text-5xl font-light text-primary'>
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
              {!isLastSeason && (
                <div className='group flex items-center justify-center '>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    size='2xl'
                    onClick={nextSeasonClick}
                    className='duration-250 ms-3 cursor-pointer transition ease-out group-hover:scale-125 active:scale-95 group-hover:translate-x-1'
                  />
                </div>
              )}
            </div>

            {/* Season text content here below */}
            <div className='mt-2'>
              <div className='flex flex-row justify-between items-center'>
                <h1 className='text-left text-lg md:text-2xl font-semibold md:font-bold text-primary'>
                  {season?.titlePro}
                </h1>
                <div className='flex flex-row items-center justify-center border border-gray-400 rounded-full px-3'>
                  <button
                    type='button'
                    className='font-bold text-4xl md:text-3xl md:hover:scale-125 active:text-gray-500'
                    onClick={() => changeFontSizeHandler('-')}
                  >
                    -
                  </button>
                  <RxFontSize
                    className='mx-2 text-3xl md:text-2xl md:hover:scale-125 active:text-gray-500 cursor-pointer'
                    onClick={() => changeFontSizeHandler('=')}
                  />
                  {/* <RiFontSize2 className="mx-2 text-xl" /> */}
                  <button
                    type='button'
                    className='font-bold text-4xl md:text-3xl md:hover:scale-125 active:text-gray-500'
                    onClick={() => changeFontSizeHandler('+')}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className='mb-2 border-b border-gray-400 pb-2'></div>
              {season?.contentPro.split('\n').map((line, i) => (
                <p key={i} className={`text-${textSize} mt-2 leading-7`}>
                  {line}
                </p>
              ))}
              <h1 className='mt-6 text-left text-2xl font-semibold text-primary'>
                {season?.titleBases}
              </h1>
              <div className='mb-2 border-b border-gray-400 pb-2'></div>
              {season?.contentBases.split('\n').map((line, i) => (
                <p key={i} className={`text-${textSize} mt-2 leading-7`}>
                  {line}
                </p>
              ))}
            </div>
          </motion.article>
        ) : (
          <div className='flex items-center justify-center'>
            <FontAwesomeIcon icon={faCat} size='2xl' />
            <p className='text-2xl mt-4 mx-2'>
              De moment no hi ha temporades per mostrar.
            </p>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default SeasonPage;
