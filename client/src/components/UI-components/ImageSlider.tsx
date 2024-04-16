import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
  faCircle,
  faCircleDot,
} from '@fortawesome/free-solid-svg-icons';
import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';
import { ModalImage } from '.';
import { AnimatePresence, motion } from 'framer-motion';
import { TImageWithMiniature } from 'types/Item-types';

type TImageSliderProps = {
  pictures: TImageWithMiniature[];
};

const ImageSlider = ({ pictures }: TImageSliderProps) => {
  const isMdScreenOrLarger = useMediaQuery({ minWidth: 768 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setLoaded(false); // Reset the loaded state when changing images
    const img = new Image();
    img.src = pictures[currentIndex].src;
    img.onload = () => setLoaded(true); // Update the loaded state when the image has loaded
  }, [pictures, currentIndex]);

  const slideLeft = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? pictures.length - 1 : currentIndex - 1;

    setCurrentIndex(newIndex);
  };
  const slideRight = () => {
    const isLastSlide = currentIndex === pictures.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;

    setCurrentIndex(newIndex);
  };
  const goToSlideHandler = (index: number) => {
    setCurrentIndex(index);
  };

  const toggleImageModal = () => {
    setShowModal((prevState) => !prevState);
  };

  const circleSize = isMdScreenOrLarger ? 'xs' : '2xs';

  return (
    <>
      {loaded && showModal && (
        <ModalImage image={pictures[currentIndex].src} onModalClick={toggleImageModal} />
      )}
      <div className='relative m-auto h-[400px] w-auto p-4 group my-2'>
        <div className='relative w-full h-full rounded-lg overflow-hidden duration-200 cursor-pointer'>
          <AnimatePresence>
            <motion.img
              key={currentIndex}
              src={loaded ? pictures[currentIndex].src : pictures[currentIndex].lowResSrc}
              alt={pictures[currentIndex].name}
              className='absolute inset-0 w-full h-full object-cover '
              style={{ objectPosition: '50% 20%' }}
              loading='lazy'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => toggleImageModal()}
            />
          </AnimatePresence>
        </div>
        {/* End of Image container */}
        <div
          className='opacity 1 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-200 absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-8 bg-black/25 cursor-pointer text-white w-10 h-10 flex items-center justify-center'
          onClick={slideLeft}
        >
          <FontAwesomeIcon
            icon={faChevronLeft}
            size='xl'
            className='transition-scale duration-200 md:hover:scale-125 active:scale-110 md:active:scale-105'
          />
        </div>
        <div
          className='opacity-1 md:opacity-0 md:group-hover:opacity-100 transition-all duration-250 absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-8 bg-black/35 cursor-pointer text-white w-10 h-10 flex items-center justify-center'
          onClick={slideRight}
        >
          <FontAwesomeIcon
            icon={faChevronRight}
            size='xl'
            className='transition-scale duration-200 md:hover:scale-125 active:scale-110 md:active:scale-105'
          />
        </div>
        {/* Circle dots */}
        <div className='flex top-4 justify-center mt-1'>
          {pictures.map((_, slideIndex) => (
            <div key={slideIndex} className='cursor-pointer'>
              {slideIndex === currentIndex ? (
                <FontAwesomeIcon
                  icon={faCircle}
                  size={circleSize}
                  style={{ color: 'rgb(8 47 73)' }}
                  className='hover:scale-125 mx-2 transition-scale duration-200'
                  onClick={() => goToSlideHandler(slideIndex)}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faCircleDot}
                  size={circleSize}
                  style={{ color: 'rgb(8 47 73)' }}
                  className='hover:scale-125 mx-2 transition-scale duration-200'
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
