import { fotos } from '../../assets/carouselPictures';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
  faCircle,
  faCircleDot,
} from '@fortawesome/free-solid-svg-icons';
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';
import { ModalImage } from '../UI-components';

const ImageSlider = () => {
  const isMdScreenOrLarger = useMediaQuery({ minWidth: 768 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const slideLeft = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? fotos.length - 1 : currentIndex - 1;

    setCurrentIndex(newIndex);
  };
  const slideRight = () => {
    const isLastSlide = currentIndex === fotos.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;

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
      {showModal && isMdScreenOrLarger && (
        <ModalImage
          image={fotos[currentIndex]}
          onModalClick={toggleImageModal}
        />
      )}
      <div className='relative m-auto h-[400px] w-auto px-4 pt-4 group'>
        {/* Image container */}
        <div
          style={{
            backgroundImage: `url(${fotos[currentIndex]})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '50% 20%',
          }}
          className='w-full h-full rounded-lg overflow-hidden duration-200 md:cursor-pointer'
          onClick={() => {
            if (isMdScreenOrLarger) toggleImageModal();
          }}
        ></div>
        {/* End of Image container */}
        <div
          className='opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-8 bg-black/25 cursor-pointer text-white w-10 h-10 flex items-center justify-center'
          onClick={slideLeft}
        >
          <FontAwesomeIcon
            icon={faChevronLeft}
            size='xl'
            className='transition-scale duration-200 hover:scale-125'
          />
        </div>
        <div
          className='opacity-0 group-hover:opacity-100 transition-all duration-250 absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-8 bg-black/35 cursor-pointer text-white w-10 h-10 flex items-center justify-center'
          onClick={slideRight}
        >
          <FontAwesomeIcon
            icon={faChevronRight}
            size='xl'
            className='transition-scale duration-200 hover:scale-125'
          />
        </div>
        {/* Circle dots */}
        <div className='flex top-4 justify-center mt-1'>
          {fotos.map((_, slideIndex) => (
            <div key={slideIndex} className='cursor-pointer'>
              {slideIndex === currentIndex ? (
                <FontAwesomeIcon
                  icon={faCircleDot}
                  size='2xs'
                  style={{ color: 'rgb(8 47 73)' }}
                  className='hover:scale-125 mx-2'
                  onClick={() => goToSlideHandler(slideIndex)}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faCircle}
                  size='2xs'
                  style={{ color: 'rgb(8 47 73)' }}
                  className='hover:scale-125 mx-2'
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
