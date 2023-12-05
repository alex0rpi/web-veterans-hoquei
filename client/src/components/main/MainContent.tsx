import { HeaderTitle } from './HeaderTitle';
import { easeInOut, motion } from 'framer-motion';
import Testimonials from './Testimonials';
import BookFeatures from './BookFeatures';
import Location from './Location';
import ChapterGrid from './ChapterGrid';

import ImageSlider from './ImageSlider';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import ContactForm from './ContactForm';

const MainContent = () => {
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
      <Testimonials />
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

export default MainContent;
