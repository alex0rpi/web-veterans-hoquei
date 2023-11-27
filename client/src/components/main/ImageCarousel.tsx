import { foto01, foto02, foto03, foto04, foto05 } from "../../assets/pictures";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FotoCard } from "../utils/FotoCard";

export const ImageCarousel = () => {
  const slideLeft = () => {
    const slider = document.getElementById("slider");
    if (slider) {
      slider.scrollLeft -= 410;
    }
  };
  const slideRight = () => {
    const slider = document.getElementById("slider");
    if (slider) {
      slider.scrollLeft += 410;
    }
  };

  return (
    <div className="container relative mx-auto mt-1 flex h-[340px] w-full items-center justify-center">
      <FontAwesomeIcon
        icon={faChevronLeft}
        size="lg"
        onClick={slideLeft}
        className="duration-250 me-2 cursor-pointer transition ease-out hover:scale-125"
      />
      <div
        id="slider"
        className="flex h-full w-full items-center overflow-x-scroll scroll-smooth whitespace-nowrap scrollbar-hide"
      >
        <FotoCard foto={foto01} />
        <FotoCard foto={foto02} />
        <FotoCard foto={foto03} />
        <FotoCard foto={foto04} />
        <FotoCard foto={foto05} />
      </div>
      <FontAwesomeIcon
        icon={faChevronRight}
        size="lg"
        onClick={slideRight}
        className="duration-250 ms-2 cursor-pointer transition ease-out hover:scale-125"
      />
    </div>
  );
};
