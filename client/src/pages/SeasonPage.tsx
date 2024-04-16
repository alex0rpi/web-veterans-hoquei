import { useNavigate, useParams } from 'react-router-dom';
import { HeaderTitle } from '../components/main';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCat, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import {
  BadgeClickable,
  FontSizeController,
  ImageSlider,
  ScrollTopBtn,
} from '../components/UI-components';
// import * as seasonInfos from '../data/seasonInfos.json';
import { seasonInfos as chapters } from '../data/SeasonInfos';
import { seasonFotos } from '../assets/seasonPictures';
import { useMediaQuery } from 'react-responsive';

const SeasonPage = () => {
  const isMdScreenOrLarger = useMediaQuery({ minWidth: 768 });

  const [backToTopBtn, setBackToTopBtn] = useState(false);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        !isMdScreenOrLarger && setBackToTopBtn(true);
      } else {
        setBackToTopBtn(false);
      }
    });
  }, []);

  const availableTextSizes = ['xs', 'sm', 'base', 'lg', 'xl', '2xl'];
  const [textSize, setTextSize] = useState('lg');
  const changeFontSizeHandler = (value: string) => {
    if (value === '=') {
      setTextSize('lg');
      return;
    }
    const increase = value === '+';
    const currentIndex = availableTextSizes.findIndex((size) => size === textSize);

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

  const navigate = useNavigate();
  const { currentSeason } = useParams();

  const seasonProPictures = seasonFotos[currentSeason!].pro;
  const seasonBasesPictures = seasonFotos[currentSeason!].bases;
  const displayChapter = chapters?.find((chapter) => chapter.season === currentSeason);

  const isLastSeason =
    chapters?.findIndex((chapter) => chapter.season === currentSeason) === chapters?.length - 1;

  const isFirstSeason = chapters?.findIndex((chapter) => chapter.season === currentSeason) === 0;

  const nextSeasonClick = () => {
    if (!chapters || chapters.length === 0) return;
    const currentSeasonIndex = chapters?.findIndex((chapter) => chapter.season === currentSeason);
    if (currentSeasonIndex === -1) return;
    const followingSeason = chapters[currentSeasonIndex + 1]?.season;
    if (!followingSeason) return;
    navigate(`/temporades/${followingSeason}`);
  };
  const previousSeasonClick = () => {
    if (!chapters || chapters.length === 0) return;
    const currentSeasonIndex = chapters?.findIndex((chapter) => chapter.season === currentSeason);
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
    <div id='proArticle'>
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
        {displayChapter ? (
          <motion.section
            key={currentSeason}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
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
                  Temporada {`${displayChapter?.season}`}
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
              <article>
                <div className='flex flex-row justify-between items-center'>
                  <h1 className='text-left text-lg md:text-2xl font-semibold md:font-bold text-primary'>
                    {displayChapter?.titlePro}
                  </h1>
                  {/* Change font Size controls */}
                  <FontSizeController onFontSizeChange={changeFontSizeHandler} />
                </div>
                <div className='mb-2 border-b border-gray-400 pb-2'></div>
                <ImageSlider pictures={seasonProPictures} />
                <div className='mt-6'>
                  {displayChapter?.contentPro.split('\n').map((line, i) => (
                    <p key={i} className={`text-${textSize} mt-2 text-primary leading-7`}>
                      {line}
                    </p>
                  ))}
                </div>
              </article>
              <article id='basesArticle'>
                <h1 className='mt-6 text-left text-2xl font-semibold text-primary'>
                  {displayChapter?.titleBases}
                </h1>
                <div className='mb-2 border-b border-gray-400 pb-2'></div>
                {seasonBasesPictures && <ImageSlider pictures={seasonBasesPictures} />}
                <div className='mt-6'>
                  {displayChapter?.contentBases.split('\n').map((line, i) => (
                    <p key={i} className={`text-${textSize} mt-2 text-primary leading-7`}>
                      {line}
                    </p>
                  ))}
                </div>
              </article>
            </div>
          </motion.section>
        ) : (
          <div className='flex items-center justify-center'>
            <FontAwesomeIcon icon={faCat} size='2xl' />
            <p className='text-2xl mt-4 mx-2'>De moment no hi ha temporades per mostrar.</p>
          </div>
        )}
      </AnimatePresence>
      {backToTopBtn && <ScrollTopBtn onClick={scrollUp} />}
    </div>
  );
};

export default SeasonPage;
