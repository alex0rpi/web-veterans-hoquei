import { HeaderTitle } from './HeaderTitle';
import { easeInOut, motion } from 'framer-motion';
import { ImageCarousel } from './ImageCarousel';
import Testimonials from './Testimonials';
import BookFeatures from './BookFeatures';

// loader
// export const mainContentLoader = () => {
//   const userName: string = fetchData('userName');
//   return {
//     userName,
//   };
// };

// type TLoaderData = {
//   userName: string;
// };

export const MainContent = () => {
  // const { userName } = useLoaderData<TLoaderData>();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: easeInOut, duration: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* <Button title="Accés membres" /> */}
      <HeaderTitle />

      {/* Main Page content */}
      <div className="pb-2 border-b border-gray-400"></div>

      <ImageCarousel />
      {/* Nova secció aqui */}
      <h4 className="text-gray-700 text-4xl font-medium mt-12 pb-2 border-b border-gray-400 mb-3">
        LLIBRE
      </h4>
      <BookFeatures />
      <Testimonials />
      {/* --------------------------------------- */}
      <h4 className="text-gray-700 text-4xl font-medium mt-12 pb-2 border-b border-gray-400 mb-3">
        JUNTA
      </h4>
      <div className="flex justify-center">
        <div className="btn bg-secondary-100 text-secondary-200 hover:shadow-inner hover:bg-opacity-50 transform hover:scale-125 transition ease-out duration-500">
          Més contingut
        </div>
      </div>
      {/* --------------------------------------- */}

      <h4 className="text-gray-700 text-4xl font-medium mt-12 pb-2 border-b border-gray-400 mb-3">
        TEMPORADES RECENTS
      </h4>
      <div className="flex justify-center">
        <div className="btn bg-secondary-100 text-secondary-200 hover:shadow-inner hover:bg-opacity-50 transform hover:scale-125 transition ease-out duration-500">
          Els epitafis del llibre aquí.
        </div>
      </div>
      {/* --------------------------------------- */}

      <h4 className="text-gray-700 text-4xl font-medium mt-12 pb-2 border-b border-gray-400 mb-3">
        Enllaços
      </h4>
      <div className="flex justify-center">
        <div className="btn bg-secondary-100 text-secondary-200 hover:shadow-inner hover:bg-opacity-50 transform hover:scale-125 transition ease-out duration-500">
          Més contingut
        </div>
      </div>
      {/* --------------------------------------- */}

      <h4 className="text-gray-700 text-4xl font-medium mt-12 pb-2 border-b border-gray-400 mb-3">
        On Som
      </h4>
      <div className="flex justify-center">
        <div className="btn bg-secondary-100 text-secondary-200 hover:shadow-inner hover:bg-opacity-50 transform hover:scale-125 transition ease-out duration-500">
          Més contingut
        </div>
      </div>
      {/* --------------------------------------- */}

      <h4 className="text-gray-700 text-4xl font-medium mt-12 pb-2 border-b border-gray-400 mb-3">
        Contacte
      </h4>
      <div className="flex justify-center">
        <div className="btn bg-secondary-100 text-secondary-200 hover:shadow-inner hover:bg-opacity-50 transform hover:scale-125 transition ease-out duration-500">
          Més contingut
        </div>
      </div>
    </motion.div>
  );
};
