import { HeaderTitle } from "./HeaderTitle";
import { easeInOut, motion } from "framer-motion";
import { ImageCarousel } from "./ImageCarousel";
import Testimonials from "./Testimonials";
import BookFeatures from "./BookFeatures";
import { MainLayout } from "../../layouts/Layout";
import Location from "./Location";
import ChapterGrid from "./ChapterGrid";

const MainContent = () => {
  return (
    <MainLayout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: easeInOut, duration: 1 }}
        exit={{ opacity: 0 }}
      >
        <HeaderTitle />

        {/* Main Page content */}
        <div className="border-b border-gray-400 pb-2"></div>

        <ImageCarousel />
        {/* Nova secció aqui */}
        <h4 className="mb-3 mt-12 border-b border-gray-400 pb-2 text-4xl font-medium text-gray-700">
          LLIBRE
        </h4>
        <BookFeatures />
        <Testimonials />
        {/* --------------------------------------- */}
        <h4 className="mb-3 mt-12 border-b border-gray-400 pb-2 text-4xl font-medium text-gray-700">
          JUNTA
        </h4>
        <div className="flex justify-center">
          <div className="btn bg-secondary-100 text-secondary-200 transform transition duration-500 ease-out hover:scale-125 hover:bg-opacity-50 hover:shadow-inner">
            Més contingut
          </div>
        </div>
        {/* --------------------------------------- */}

        <h4 className="mb-3 mt-12 border-b border-gray-400 pb-2 text-4xl font-medium text-gray-700">
          TEMPORADES RECENTS
        </h4>
        <ChapterGrid />
        {/* --------------------------------------- */}

        <h4 className="mb-3 mt-12 border-b border-gray-400 pb-2 text-4xl font-medium text-gray-700">
          Enllaços
        </h4>
        <div className="flex justify-center">
          <div className="btn bg-secondary-100 text-secondary-200 transform transition duration-500 ease-out hover:scale-125 hover:bg-opacity-50 hover:shadow-inner">
            Més contingut
          </div>
        </div>
        {/* --------------------------------------- */}

        <h4 className="mb-3 mt-12 border-b border-gray-400 pb-2 text-4xl font-medium text-gray-700">
          On Som
        </h4>
        <Location />
        {/* --------------------------------------- */}

        <h4 className="mb-3 mt-12 border-b border-gray-400 pb-2 text-4xl font-medium text-gray-700">
          Contacte
        </h4>
        <div className="flex justify-center">
          <div className="btn bg-secondary-100 text-secondary-200 transform transition duration-500 ease-out hover:scale-125 hover:bg-opacity-50 hover:shadow-inner">
            Més contingut
          </div>
        </div>
      </motion.div>
    </MainLayout>
  );
};

export default MainContent;
