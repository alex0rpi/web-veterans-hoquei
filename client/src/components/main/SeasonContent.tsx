import chapters from "../../data/chapters.json";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { HeaderTitle } from "./HeaderTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const SeasonContent = () => {
  const navigate = useNavigate();
  // fetch the chapter data
  const { season } = useParams();

  const seasonObject = chapters.find((chapter) => chapter.season === season);

  const nextSeatonClick = () => {
    if (Number(season?.split("-")[1]) === new Date().getFullYear()) return;

    const nextSeason = season
      ?.split("-")
      .map((year) => +year + 1)
      .join("-");

    navigate(`/temporades/${nextSeason}`);
  };
  const previousSeatonClick = () => {
    if (Number(season?.split("-")[0]) === 2017) return;
    const previousSeason = season
      ?.split("-")
      .map((year) => +year - 1)
      .join("-");

    navigate(`/temporades/${previousSeason}`);
  };

  return (
    <>
      <HeaderTitle />

      <article>
        <div className="flex items-center justify-center">
          <FontAwesomeIcon
            icon={faChevronLeft}
            size="2xl"
            onClick={previousSeatonClick}
            className="duration-250 me-3 cursor-pointer transition ease-out hover:scale-125 active:scale-95"
          />
          <h1 className="my-5 text-center text-5xl font-light text-sky-950">{`Temporada ${seasonObject?.season}`}</h1>
          <FontAwesomeIcon
            icon={faChevronRight}
            size="2xl"
            onClick={nextSeatonClick}
            className="duration-250 ms-3 cursor-pointer transition ease-out hover:scale-125 active:scale-95"
          />
        </div>
        <div>
          <h1 className="mt-6 text-left text-2xl font-semibold text-sky-950">
            {seasonObject?.titlePro}
          </h1>
          <div className="mb-2 border-b border-gray-400 pb-2"></div>
          <p className="text-md leading-7">{seasonObject?.contentPro}</p>
          <h1 className="mt-6 text-left text-2xl font-semibold text-sky-950">
            {seasonObject?.titleBases}
          </h1>
          <div className="mb-2 border-b border-gray-400 pb-2"></div>
          <p className="text-md leading-7">{seasonObject?.contentBases}</p>
        </div>
      </article>
    </>
  );
};

export default SeasonContent;
