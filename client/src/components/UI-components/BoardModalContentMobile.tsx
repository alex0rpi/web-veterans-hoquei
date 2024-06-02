import { TBoardMemberInfos } from '../../types/Item-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { AnimatePresence, easeIn, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import LinkifyText from '../../utils/LinkifyText';

type TModalProps = TBoardMemberInfos & {
  onModalClick: () => void;
};

const BoardModalContentMobile = ({ ...props }: TModalProps) => {
  const [loaded, setLoaded] = useState(false);

  const linkify = (inputText: string) => {
    return LinkifyText(inputText);
  };

  useEffect(() => {
    setLoaded(false); // Reset the loaded state when changing images
    const img = new Image();
    img.src = props.imageUrls[1] ?? props.imageUrls[0];
    img.onload = () => setLoaded(true); // Update the loaded state when the image has loaded
  }, [props.imageUrls]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: easeIn, duration: 0.2 }}
        exit={{ opacity: 0 }}
      >
        <div className='w-[95vw] h-[90vh] top-[5vh] left-1/2 bg-slate-300 rounded-xl fixed transform -translate-x-1/2 z-30 transition-all duration-200 flex flex-col p-3'>
          {/* Member header */}
          <div className='flex row items-center justify-between'>
            <div className='flex flex-col items-start'>
              <p className='text-xl md:text-2xl font-semibold tracking-wide'>{props.name}</p>
              <p className='font-semibold text-lg md:text-xl'>{props.role}</p>
            </div>
            <button
              type='button'
              onClick={props.onModalClick}
              className='border-2 border-primary rounded-full px-2 py-1 hover:bg-primary hover:text-white transition-colors duration-200'
            >
              <span>
                Tancar <FontAwesomeIcon icon={faXmark} size='lg' />
              </span>
            </button>
          </div>
          {/* Member image */}
          <div className='w-full h-[40%]'>
            <img
              src={
                loaded
                  ? props.imageUrls[1] ?? props.imageUrls[0]
                  : props.lowResimageUrls[1] ?? props.lowResimageUrls[0]
              }
              alt='Foto'
              className='object-cover h-full w-full rounded-xl mb-2 mt-1'
              style={{ objectPosition: '50% 15%' }}
              // loading='lazy'
            />
          </div>
          {/* Member description */}
          <div className='mt-2 overflow-y-auto'>
            <strong className='me-1 text-lg mt-2'>Temporades al FCB</strong>
            <div>
              {props.playerSeasons.map((season, index) => (
                // Season badge
                <span
                  key={index}
                  className={`text-sm inline-block ${index % 2 === 0 ? 'bg-primary text-white' : 'bg-red-900 text-white'} rounded-md px-[0.3rem] mx-[0.1rem] my-1`}
                >
                  {season}
                </span>
              ))}
            </div>
            {/* Trajectory */}
            <div className='overflow-y-auto'>
              <span className='block mt-1'>
                <strong className='me-1 text-lg mb-1 block'>Trajectòria</strong>
                {!props.trajectory.includes('\n') ? (
                  <p className='inline-block text-lg'>{props.trajectory}</p>
                ) : (
                  props.trajectory.split('\n').map((etapa, index) => (
                    <p
                      key={index}
                      className={`inline-block text-lg ${etapa.startsWith('-') && 'indent-3'} ${etapa.includes('*') && 'indent-6'}`}
                    >
                      {etapa}
                    </p>
                  ))
                )}
              </span>
              {/* Anecdotes */}
              {props.anecdote !== '' && (
                <span className='block mt-1'>
                  <strong className='me-1 text-lg'>
                    {props.anecdote!.split('\n').length > 1 ? 'Anècdotes: ' : 'Anècdota: '}
                  </strong>
                  {props.anecdote!.split('\n').map((anec, index) => (
                    <p key={index} className='inline-block text-lg'>
                      {anec}
                    </p>
                  ))}
                </span>
              )}
              {/* Other comments */}
              {props.otherComment !== '' && (
                <span className='block mt-1'>
                  <strong className='me-1 text-lg'>Comentari:</strong>
                  {props.otherComment!.split('\n').map((comment, index) => (
                    <p key={index} className='inline-block text-lg'>
                      {linkify(comment)}
                    </p>
                  ))}
                </span>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default BoardModalContentMobile;
