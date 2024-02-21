import { useContext } from 'react';
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

const MainPage = () => {
  const { user } = useContext(UserContext);

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
      <HeaderTitle />
      <ImageSlider />
      <Association />
      <BoardMembers />
      <BookFeatures />
      <BookTeasers />
      <BookTestimonials />
      <ChapterGrid />
      <Location />
      <ContactForm />
    </motion.div>
  );
};

export default MainPage;
