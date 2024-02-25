import { easeInOut, motion } from 'framer-motion';

const BlogPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: easeInOut, duration: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className='mt-10 border-b border-gray-400 pb-2 text-4xl font-medium text-gray-700'>
        <span>Secció en construcció 🐈 🚧🏗️</span>
      </h1>

      <div className='rounded-md my-2'>
        {/* <h1 className='text-xl font-bold text-primary mb-2 inline-block ms-2'>
          La nostra missió
        </h1> */}
        <p className='text-primary font-semibold text-lg'>
          Aquesta pàgina serà el blog informatiu de l'Associació, i també un
          punt de trobada entre els membres registrats que vulguin penjar
          novetats o informacions relacionades amb l'hoquei patins i
          esdeveniments relacionats.
        </p>
        <p className='text-primary font-semibold text-lg'>
          Tant aviat com puguem la tindrem a punt.
        </p>
      </div>
    </motion.div>
  );
};

export default BlogPage;
