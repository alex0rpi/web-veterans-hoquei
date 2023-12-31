import { foto01, foto02, foto03 } from '../../assets/pictures';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
  faCircle,
  faCircleDot,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import ImageModal from '../UI-components/ModalImage';
import { Backdrop } from '../UI-components/Backdrop';

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const slides = [foto01, foto02, foto03];

  const slideLeft = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    console.log('newIndex: ', newIndex);

    setCurrentIndex(newIndex);
  };
  const slideRight = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    console.log('newIndex: ', newIndex);

    setCurrentIndex(newIndex);
  };
  const goToSlideHandler = (index: number) => {
    setCurrentIndex(index);
  };

  const toggleImageModal = () => {
    setShowModal((prevState) => !prevState);
  };

  return (
    <>
      {showModal && (
        <>
          <Backdrop onClick={toggleImageModal} />
          <ImageModal
            show={showModal}
            image={slides[currentIndex]}
            onModalClick={toggleImageModal}
          />
        </>
      )}
      <div className="relative m-auto h-[400px] w-auto px-4 pt-4 group">
        {/* Image container */}
        <div
          style={{
            backgroundImage: `url(${slides[currentIndex]})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
          className="w-full h-full rounded-lg overflow-hidden duration-200 cursor-pointer"
          onClick={toggleImageModal}
        ></div>
        {/* End of Image container */}
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 cursor-pointer text-white w-10 h-10 flex items-center justify-center">
          <FontAwesomeIcon
            icon={faChevronLeft}
            size="lg"
            onClick={slideLeft}
            className="transition-scale duration-200 hover:scale-125"
          />
        </div>
        <div className="opacity-0 group-hover:opacity-100 transition-all duration-250 absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 cursor-pointer text-white w-10 h-10 flex items-center justify-center">
          <FontAwesomeIcon
            icon={faChevronRight}
            size="lg"
            onClick={slideRight}
            className="transition-scale duration-200 hover:scale-125"
          />
        </div>
        {/* Circle dots */}
        <div className="flex top-4 justify-center mt-1">
          {slides.map((slide, slideIndex) => (
            <div key={slideIndex} className="cursor-pointer">
              {slideIndex === currentIndex ? (
                <FontAwesomeIcon
                  icon={faCircleDot}
                  size="2xs"
                  style={{ color: 'rgb(8 47 73)' }}
                  className="hover:scale-125 mx-2"
                  onClick={() => goToSlideHandler(slideIndex)}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faCircle}
                  size="2xs"
                  style={{ color: 'rgb(8 47 73)' }}
                  className="hover:scale-125 mx-2"
                  onClick={() => goToSlideHandler(slideIndex)}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
