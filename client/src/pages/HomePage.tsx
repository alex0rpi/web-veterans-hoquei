import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/UserContext';
import { easeInOut, motion } from 'framer-motion';
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

type TMainPageProps = {
  homeRef?: React.RefObject<HTMLDivElement>;
  associationRef?: React.RefObject<HTMLDivElement>;
  boardRef?: React.RefObject<HTMLDivElement>;
  bookRef?: React.RefObject<HTMLDivElement>;
  seasonsRef?: React.RefObject<HTMLDivElement>;
  locationRef?: React.RefObject<HTMLDivElement>;
  contactRef?: React.RefObject<HTMLDivElement>;
  scrollUp?: () => void;
};

const HomePage = ({
  homeRef,
  associationRef,
  seasonsRef,
  contactRef,
  locationRef,
  boardRef,
  bookRef,
}: TMainPageProps) => {
  const { user } = useContext(UserContext);
  const [backToTopBtn, setBackToTopBtn] = useState(false);

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
    </motion.div>
  );
};

export default HomePage;
