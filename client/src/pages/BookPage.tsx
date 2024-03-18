// import pdf from '../../public/assets/documents/Llibre-veterans-hoquei-patins-fcb_compressed.pdf';

import { easeInOut, motion } from 'framer-motion';

const pdfUrl =
  'http://localhost:4000/documents/Llibre-veterans-hoquei-patins-fcb_compressed.pdf';

const BookPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: easeInOut, duration: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className='w-full h-full'>
        <iframe
          title='Browser PDF Viewer'
          src={pdfUrl}
          allowFullScreen
          className='w-full h-[89vh] md:h-[95vh] rounded-lg'
        />
      </div>
    </motion.div>
  );
};

export default BookPage;

/* When setting the src attribute of an iframe to a URL, the browser automatically
 makes a GET request to that URL to fetch the content. This is a SYNCHRONOUS operation. */
