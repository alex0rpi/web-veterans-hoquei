import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { HeaderTitle } from '../components/main/HeaderTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { ChapterContext } from '../context/ChaptersContext';
import { easeInOut, motion } from 'framer-motion';

const SeasonPage = () => {
  const { chapters } = useContext(ChapterContext);
  console.log('chapters: ', chapters);

  const navigate = useNavigate();
  const { season } = useParams();

  const seasonObject = chapters.find((chapter) => chapter.season === season);

  const nextSeasonClick = () => {
    const nextSeason = season
      ?.split('-')
      .map((year) => +year + 1)
      .join('-');
    // Check if nextSeason is in the array of chapters, if not return
    const nextSeasonExists = chapters.find((chapter) => chapter.season === nextSeason);
    if (!nextSeasonExists) return;
    navigate(`/temporades/${nextSeason}`);
  };
  const previousSeasonClick = () => {
    const previousSeason = season
      ?.split('-')
      .map((year) => +year - 1)
      .join('-');
    const previousSeasonExists = chapters.find(
      (chapter) => chapter.season === previousSeason
    );
    if (!previousSeasonExists) return;
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
          <h1 className="px-2 text-center text-5xl font-light text-primary">
            <span className="inline-block w-max">Temporada</span>
            <span>{` ${seasonObject?.season}`}</span>
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
        <div>
          <h1 className="mt-6 text-left text-2xl font-semibold text-primary">
            {seasonObject?.titlePro}
          </h1>
          <div className="mb-2 border-b border-gray-400 pb-2"></div>
          <p className="text-md leading-7">{seasonObject?.contentPro}</p>
          <h1 className="mt-6 text-left text-2xl font-semibold text-primary">
            {seasonObject?.titleBases}
          </h1>
          <div className="mb-2 border-b border-gray-400 pb-2"></div>
          <p className="text-md leading-7">{seasonObject?.contentBases}</p>
        </div>
      </article>
    </motion.div>
  );
};

export default SeasonPage;
