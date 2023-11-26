import { Card } from '../utils/Card';
import { HeaderTitle } from './HeaderTitle';
import { foto01, foto02, foto03, foto04, foto05 } from '../../assets/pictures';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

type MainContentProps = {
  loggedUser: string;
};

export const MainContent = (props: MainContentProps) => {
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
    <div className="md:col-start-3 md:col-end-4 md:justify-stretch px-6 py-6 bg-gray-200 ">
      {/* <Button title="Accés membres" /> */}
      <HeaderTitle />

      {/* Main Page content */}
      <div className="pb-2 border-b border-gray-400"></div>
      <p className="text-right text-gray-700">
        Bon dia, <strong>{props.loggedUser}</strong>
      </p>
      <div className="relative flex items-center w-full justify-center container mx-auto mt-1 mb-4 h-[340px]">
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

      {/* Nova secció aqui */}
      <h4 className="text-gray-700 text-4xl font-medium mt-12 pb-2 border-b border-gray-400">
        LLIBRE
      </h4>

      <div className="flex justify-center">
        <div className="btn bg-secondary-100 text-secondary-200 hover:shadow-inner hover:bg-opacity-50 transform hover:scale-125 transition ease-out duration-500">
          Més contingut
        </div>
      </div>
      <h4 className="text-gray-700 text-4xl font-medium mt-12 pb-2 border-b border-gray-400">
        JUNTA
      </h4>
      <div className="flex justify-center">
        <div className="btn bg-secondary-100 text-secondary-200 hover:shadow-inner hover:bg-opacity-50 transform hover:scale-125 transition ease-out duration-500">
          Més contingut
        </div>
      </div>
      <h4 className="text-gray-700 text-4xl font-medium mt-12 pb-2 border-b border-gray-400">
        Enllaços
      </h4>
      <div className="flex justify-center">
        <div className="btn bg-secondary-100 text-secondary-200 hover:shadow-inner hover:bg-opacity-50 transform hover:scale-125 transition ease-out duration-500">
          Més contingut
        </div>
      </div>
      <h4 className="text-gray-700 text-4xl font-medium mt-12 pb-2 border-b border-gray-400">
        On Som
      </h4>
      <div className="flex justify-center">
        <div className="btn bg-secondary-100 text-secondary-200 hover:shadow-inner hover:bg-opacity-50 transform hover:scale-125 transition ease-out duration-500">
          Més contingut
        </div>
      </div>
      <h4 className="text-gray-700 text-4xl font-medium mt-12 pb-2 border-b border-gray-400">
        Contacte
      </h4>
      <div className="flex justify-center">
        <div className="btn bg-secondary-100 text-secondary-200 hover:shadow-inner hover:bg-opacity-50 transform hover:scale-125 transition ease-out duration-500">
          Més contingut
        </div>
      </div>
      {/* Secció Temporades-epitafis del llibre */}
      {/* Secció Blog i Notícies - potser pàgina apart?? */}
      {/* Secció Enllaços */}
      {/* Secció On Som */}
      {/* Secció Contacte */}
    </div>
  );
};
