import { HeaderTitle } from '../components/main/HeaderTitle';
import { easeInOut, motion } from 'framer-motion';
import BookTestimonials from '../components/main/BookTestimonials';
import BookFeatures from '../components/main/BookFeatures';
import Location from '../components/main/Location';
import ChapterGrid from '../components/main/ChapterGrid';

import ImageSlider from '../components/main/ImageSlider';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import ContactForm from '../components/main/ContactForm';
import BookTeasers from '../components/main/BookTeasers';

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
        <h1 className="text-lg text-right text-gray-600">
          Bon dia, <span className="font-bold text-lg text-right"> {user.name}</span>
        </h1>
      )}
      <HeaderTitle />

      <ImageSlider />
      <h4 className="mb-3 mt-6 border-b border-gray-400 pb-2 text-4xl font-medium text-gray-700">
        LLIBRE
      </h4>
      <BookFeatures />

      <BookTeasers />

      <BookTestimonials />
      <h4 className="mb-3 mt-6 border-b border-gray-400 pb-2 text-4xl font-medium text-gray-700">
        JUNTA
      </h4>
      <div className="flex justify-center">
        <div className="btn bg-secondary-100 text-secondary-200 transform transition duration-500 ease-out hover:scale-125 hover:bg-opacity-50 hover:shadow-inner">
          Més contingut
        </div>
      </div>
      <h4 className="mb-3 mt-6 border-b border-gray-400 pb-2 text-4xl font-medium text-gray-700">
        TEMPORADES RECENTS
      </h4>
      <ChapterGrid />

      <h4 className="mb-3 mt-6 border-b border-gray-400 pb-2 text-4xl font-medium text-gray-700">
        Enllaços
      </h4>
      <div className="flex justify-center">
        <div className="btn bg-secondary-100 text-secondary-200 transform transition duration-500 ease-out hover:scale-125 hover:bg-opacity-50 hover:shadow-inner">
          Més contingut
        </div>
      </div>

      <h4 className="mb-3 mt-6 border-b border-gray-400 pb-2 text-4xl font-medium text-gray-700">
        On Som
      </h4>
      <Location />

      <h4 className="mb-3 mt-6 border-b border-gray-400 pb-2 text-4xl font-medium text-gray-700">
        Contacte
      </h4>
      <ContactForm />
    </motion.div>
  );
};

export default MainPage;
