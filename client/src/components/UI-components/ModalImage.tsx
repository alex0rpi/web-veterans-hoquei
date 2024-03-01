import { easeIn, motion } from 'framer-motion';
import ReactDOM from 'react-dom';

type TModalProps = {
  // show: boolean;
  image: string;
  onModalClick: () => void;
};

const ImageModal = ({ image, onModalClick }: TModalProps) => {
  const modalScreen = (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: easeIn, duration: 0.2 }}
        exit={{ opacity: 0 }}
        className='fixed top-0 left-0 w-full h-screen z-20 bg-slate-950/80'
        onClick={onModalClick}
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: easeIn, duration: 0.2 }}
        exit={{ opacity: 0 }}
        className='h-screen w-screen fixed top-[5vh] left-1/2 transform -translate-x-1/2 z-30 transition-all duration-200'
      >
        <img
          src={image}
          alt='Foto'
          className='w-auto h-[87%] m-auto rounded-xl cursor-pointer object-contain border-4 border-slate-100'
          onClick={onModalClick}
        />
      </motion.div>
    </>
  );
  const modalElement = document.getElementById('modalbackdrop');
  if (!modalElement) return null; // or return some fallback component
  return ReactDOM.createPortal(modalScreen, modalElement);
};

export default ImageModal;
