import { easeInOut, motion } from 'framer-motion';
import { Navigation } from '../components/navigation/Navigation';

const PlayersPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: easeInOut, duration: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className='twoColLayout'>
        <Navigation />
        <div className='pageLayout'>
          <h1 className='mt-10 border-b border-gray-400 pb-2 text-4xl font-medium text-gray-700'>
            <span>Secció en construcció 🐈 🚧🏗️</span>
          </h1>

          <div className='rounded-md my-2'>
            {/* <h1 className='text-xl font-bold text-primary mb-2 inline-block ms-2'>
          La nostra missió
        </h1> */}
            <p className='text-primary font-semibold text-lg'>
              Aquesta pàgina contindrà un conjunt de fitxes de jugadors amb
              informacions.
            </p>
            <p className='text-primary font-semibold text-lg'>
              Tant aviat com puguem la tindrem a punt.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PlayersPage;
