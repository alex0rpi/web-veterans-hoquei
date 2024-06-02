import { TBoardMemberInfos } from '../../types/Item-types';
import { Button } from '.';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { AnimatePresence, easeIn, motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import LinkifyText from '../../utils/LinkifyText';
import { useEffect, useState } from 'react';

type TModalProps = TBoardMemberInfos & {
  onModalClick: () => void;
};

const BoardModalContent = ({ ...props }: TModalProps) => {
  const isMdScreenOrLarger = useMediaQuery({ minWidth: 768 });
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
        <div className='w-[95vw] h-[85vh] md:w-[85vw] xl:w-[65vw] md:h-[65vh] top-[10vh] md:top-[15vh] left-1/2 bg-slate-200 rounded-xl fixed transform -translate-x-1/2 z-30 transition-all duration-200 flex flex-row justify-between items-start p-2'>
          <div className='w-[35%] h-full'>
            <img
              src={
                loaded
                  ? props.imageUrls[1] ?? props.imageUrls[0]
                  : props.lowResimageUrls[1] ?? props.lowResimageUrls[0]
              }
              alt='Foto'
              className='object-cover h-full w-full rounded-lg'
              // loading='lazy'
            />
          </div>
          <div className='w-[65%] h-full ms-2 text-primary flex flex-col'>
            <div className='mx-1 absolute top-2 right-1 flex-none'>
              <Button
                title={isMdScreenOrLarger ? 'Tanca' : 'X'}
                type='button'
                icon={isMdScreenOrLarger && <FontAwesomeIcon icon={faXmark} size='lg' />}
                onClick={props.onModalClick}
              />
            </div>
            {/* Seasons List */}
            <div className='flex-none'>
              <p className='text-xl md:text-2xl font-semibold tracking-wide'>{props.name}</p>
              <p className='font-semibold text-lg md:text-xl mb-1'>{props.role}</p>
              <div className='block'>
                <strong className='me-1 text-md md:text-lg block'>Temporades al FCB</strong>
                {props.playerSeasons.map((season, index) => (
                  // Season badge
                  <span
                    key={index}
                    className={`text-sm inline-block ${index % 2 === 0 ? 'bg-primary text-white' : 'bg-red-900 text-white'} rounded-md px-1 mx-1 my-1`}
                  >
                    {season}
                  </span>
                ))}
              </div>
            </div>
            {/* Trajectory */}
            <div className='overflow-y-auto'>
              <span className='block mt-1'>
                <strong className='text-lg mb-1 block'>Trajectòria</strong>
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
              {/* Anecdote */}
              {props.anecdote !== '' && (
                <span className='block mt-1'>
                  <strong className='me-1 text-lg'>
                    {props.anecdote!.split('\n').length > 1 ? 'Anècdotes: ' : 'Anècdota: '}
                  </strong>
                  {props.anecdote!.split('\n').map((anec, index) => (
                    <p key={index} className='text-lg'>
                      {anec}
                    </p>
                  ))}
                </span>
              )}
              {/* other comment */}
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

export default BoardModalContent;
