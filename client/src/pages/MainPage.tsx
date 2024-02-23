import { useContext, useRef, useEffect, useState } from 'react';
import { UserContext } from '../context/UserContext';
import { HeaderTitle } from '../components/main/HeaderTitle';
import { easeInOut, motion } from 'framer-motion';
import BookTestimonials from '../components/main/BookTestimonials';
import BookFeatures from '../components/main/BookFeatures';
import Location from '../components/main/Location';
import ChapterGrid from '../components/main/ChapterGrid';
import ImageSlider from '../components/main/ImageSlider';
import ContactForm from '../components/main/ContactForm';
import BookTeasers from '../components/main/BookTeasers';
import Association from '../components/main/Association';
import BoardMembers from '../components/main/BoardMembers';
import { Navigation } from '../components/navigation/Navigation';
import ScrollTopBtn from '../components/UI-components/ScrollTopBtn';

const MainPage = () => {
  const { user } = useContext(UserContext);
  const [backToTopBtn, setBackToTopBtn] = useState(false);
  const associationRef = useRef<HTMLDivElement | null>(null);
  const seasonsRef = useRef<HTMLDivElement | null>(null);
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
      <div className='md:grid md:grid-cols-layoutNav'>
        <Navigation associationRef={associationRef} seasonsRef={seasonsRef} />
        <div className='mt-4 mx-3 md:col-span1 md:col-start-2 overflow-y-auto'>
          {user.name !== '' && (
            <h1 className='text-lg text-right text-gray-600'>
              Bon dia,{' '}
              <span className='font-bold text-lg text-right'> {user.name}</span>
            </h1>
          )}
          <HeaderTitle />
          <ImageSlider />
          <Association scrollRef={associationRef} />
          <BoardMembers />
          <BookFeatures />
          <BookTeasers />
          <BookTestimonials />
          <ChapterGrid scrollRef={seasonsRef} />
          <Location />
          <ContactForm />
          {backToTopBtn && <ScrollTopBtn title='↑' onClick={scrollUp} />}
        </div>
      </div>
    </motion.div>
  );
};

export default MainPage;
