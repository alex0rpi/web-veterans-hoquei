import { easeInOut, motion } from 'framer-motion';

const MainContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: easeInOut, duration: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className="mt-10 border-b border-gray-400 pb-2 text-4xl font-medium text-gray-700">
        Secció en construcció 🐈 🚧🏗️
      </h1>
    </motion.div>
  );
};

export default MainContent;
