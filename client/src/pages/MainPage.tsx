import { useContext, useRef, useEffect, useState } from 'react';
import { UserContext } from '../context/UserContext';
import { easeInOut, motion } from 'framer-motion';
import { Navigation } from '../components/navigation/Navigation';
import ScrollTopBtn from '../components/UI-components/ScrollTopBtn';
import {
  Association,
  BoardMembers,
  BookFeatures,
  BookTeasers,
  BookTestimonials,
  ChapterGrid,
  ContactForm,
  HeaderTitle,
  ImageSlider,
  Location,
} from '../components/main';

const MainPage = () => {
  const { user } = useContext(UserContext);
  const [backToTopBtn, setBackToTopBtn] = useState(false);
  const homeRef = useRef<HTMLDivElement | null>(null);
  const associationRef = useRef<HTMLDivElement | null>(null);
  const boardRef = useRef<HTMLDivElement | null>(null);
  const bookRef = useRef<HTMLDivElement | null>(null);
  const seasonsRef = useRef<HTMLDivElement | null>(null);
  const locationRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setBackToTopBtn(true);
      } else {
        setBackToTopBtn(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: easeInOut, duration: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className='twoColLayout'>
        <Navigation
          homeRef={homeRef}
          associationRef={associationRef}
          seasonsRef={seasonsRef}
          boardRef={boardRef}
          bookRef={bookRef}
          locationRef={locationRef}
          contactRef={contactRef}
        />
        <div className='pageLayout'>
          {user.name !== '' && (
            <h1 className='text-lg text-right text-gray-600'>
              Bon dia,{' '}
              <span className='font-bold text-lg text-right'> {user.name}</span>
            </h1>
          )}
          <HeaderTitle scrollRef={homeRef} />
          <ImageSlider />
          <Association scrollRef={associationRef} />
          <BoardMembers scrollRef={boardRef} />
          <BookFeatures scrollRef={bookRef} />
          <BookTeasers />
          <BookTestimonials />
          <ChapterGrid scrollRef={seasonsRef} />
          <Location scrollRef={locationRef} />
          <ContactForm scrollRef={contactRef} />
          {backToTopBtn && <ScrollTopBtn title='↑' onClick={scrollUp} />}
        </div>
      </div>
    </motion.div>
  );
};

export default MainPage;
