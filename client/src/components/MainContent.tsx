import { Button } from './Button';
import { Card } from './Card';
import { HeaderTitle } from './HeaderTitle';
import { foto01, foto02, foto03, foto04, foto05 } from '../assets/pictures';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export const MainContent = () => {
  const slideLeft = () => {
    const slider = document.getElementById('slider');
    if (slider) {
      slider.scrollLeft -= 400;
    }
  };
  const slideRight = () => {
    const slider = document.getElementById('slider');
    if (slider) {
      slider.scrollLeft += 400;
    }
  };

  return (
    <div className="md:col-start-3 md:col-end-4 md:justify-stretch px-6 py-6 bg-gray-200 ">
      <Button title="Accés membres" />
      <HeaderTitle />

      {/* Main Page content */}
      <h4 className="font-bold mt-8 pb-2 border-b border-gray-400">Primera secció</h4>
      <div className="relative flex items-center w-full justify-center container mx-auto my-6 h-[350px]">
        <FontAwesomeIcon
          icon={faChevronLeft}
          size="lg"
          onClick={slideLeft}
          className="cursor-pointer me-1 hover:scale-125 transition ease-out duration-250"
        />
        <div
          id="slider"
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth"
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
          className="cursor-pointer ms-1 hover:scale-125 transition ease-out duration-250"
        />
      </div>

      {/* Nova secció aqui */}
      <h4 className="font-bold mt-12 pb-2 border-b border-gray-400">Segona Secció</h4>

      <div className="flex justify-center">
        <div className="btn bg-secondary-100 text-secondary-200 hover:shadow-inner hover:bg-opacity-50 transform hover:scale-125 transition ease-out duration-500">
          Més contingut
        </div>
      </div>
      {/* Secció Junta */}
      {/* Secció Llibre */}
      {/* Secció Temporades-epitafis del llibre */}
      {/* Secció Blog i Notícies - potser pàgina apart?? */}
      {/* Secció Enllaços */}
      {/* Secció On Som */}
      {/* Secció Contacte */}
    </div>
  );
};
