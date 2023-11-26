import { foto01, foto02, foto03, foto04, foto05 } from '../../assets/pictures';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Card } from '../utils/Card';

export const ImageCarousel = () => {
  const slideLeft = () => {
    const slider = document.getElementById('slider');
    if (slider) {
      slider.scrollLeft -= 410;
    }
  };
  const slideRight = () => {
    const slider = document.getElementById('slider');
    if (slider) {
      slider.scrollLeft += 410;
    }
  };

  return (
    <div className="relative flex items-center w-full justify-center container mx-auto mt-1 h-[340px]">
      <FontAwesomeIcon
        icon={faChevronLeft}
        size="lg"
        onClick={slideLeft}
        className="cursor-pointer me-2 hover:scale-125 transition ease-out duration-250"
      />
      <div
        id="slider"
        className="w-full h-full flex items-center overflow-x-scroll scrollbar-hide whitespace-nowrap scroll-smooth"
      >
        <Card foto={foto01} />
        <Card foto={foto02} />
        <Card foto={foto03} />
        <Card foto={foto04} />
        <Card foto={foto05} />
      </div>
      <FontAwesomeIcon
        icon={faChevronRight}
        size="lg"
        onClick={slideRight}
        className="cursor-pointer ms-2 hover:scale-125 transition ease-out duration-250"
      />
    </div>
  );
};
