import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { easeIn, motion } from 'framer-motion';
import ReactDOM from 'react-dom';
import Button from './Button';

type TModalProps = {
  image: string;
  name: string;
  role: string;
  description: string;
  onModalClick: () => void;
};

const ModalCard = ({
  name,
  role,
  description,
  image,
  onModalClick,
}: TModalProps) => {
  const modalScreen = (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: easeIn, duration: 0.2 }}
        exit={{ opacity: 0 }}
        className='fixed top-0 left-0 w-full h-screen z-20 bg-slate-950/50 cursor-pointer'
        onClick={onModalClick}
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, x: 150 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: easeIn, duration: 0.2 }}
        exit={{ opacity: 0 }}
      >
        <div className='w-3/4 h-96 bg-slate-200 rounded-lg fixed top-[15vh] left-1/2 transform -translate-x-1/2 z-30 transition-all duration-200'>
          <div className='relative flex flex-row justify-between items-start p-2'>
            <div className='w-[40%] overflow-hidden'>
              <img
                src={image}
                alt='Foto'
                className='w-80 h-auto max-h-[50vh] rounded-xl object-contain border-4 border-slate-100 '
              />
            </div>
            {/* Close button */}

            <div className='w-[60%] mx-2'>
              <div className='mx-1 absolute top-2 right-1'>
                <Button
                  title='Tanca'
                  type='button'
                  icon={<FontAwesomeIcon icon={faXmark} size='lg' />}
                  onClick={onModalClick}
                />
              </div>
              <div>
                <p className='text-2xl font-semibold text-gray-900'>{name}</p>
                <p className='font-semibold text-xl text-gray-900'>{role}</p>
                <span className='block'>
                  <strong className='me-1'>Temporades:</strong>
                  <p className='inline-block'>1959-1960, etc. etc.</p>
                </span>
                <span className='block'>
                  <strong className='me-1'>Palmarès:</strong>
                  <p className='inline-block'>Lligues, copes, etc..</p>
                </span>
              </div>
              <div className='h-[50vh] overflow-y-auto'>
                <p className='my-2'>{description}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
  const modalElement = document.getElementById('modalbackdrop');
  if (!modalElement) return null; // or return some fallback component
  return ReactDOM.createPortal(modalScreen, modalElement);
};

export default ModalCard;
