import { TBoardMemberInfos } from '../../types/Item-types';
import { Button } from '.';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

type TModalProps = TBoardMemberInfos & {
  onModalClick: () => void;
};

const ModalContent = ({ ...props }: TModalProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
    >
      <div className='w-[60vw] h-[65vh] bg-slate-200 rounded-xl fixed top-[15vh] left-1/2 transform -translate-x-1/2 z-30 transition-all duration-200 flex flex-row justify-between items-start p-2'>
        <div className='w-[30%] h-full'>
          <img
            src={props.imageUrl}
            alt='Foto'
            className='object-cover h-full w-full rounded-lg'
          />
        </div>
        <div className='w-[70%] h-full mx-2 text-primary flex flex-col'>
          <div className='mx-1 absolute top-2 right-1 flex-none'>
            <Button
              title='Tanca'
              type='button'
              icon={<FontAwesomeIcon icon={faXmark} size='lg' />}
              onClick={props.onModalClick}
            />
          </div>
          <div className='flex-none'>
            <p className='text-2xl font-semibold '>{props.name}</p>
            <p className='font-semibold text-xl mb-2'>{props.role}</p>
            <div className='block'>
              <strong className='me-1'>Temporades</strong>
              {props.playerSeasons.map((season, index) => (
                // Season badge
                <span
                  key={index}
                  className={`text-sm inline-block ${index % 2 === 0 ? 'bg-primary text-white' : 'bg-slate-300 text-primary'} rounded-md px-1 mx-1 my-1`}
                >
                  {season}
                </span>
              ))}
            </div>
          </div>
          <div className='overflow-y-auto'>
            <span className='block mt-1'>
              <strong className='me-1'>Trajectòria</strong>
              <p className='my-2 inline-block'>{props.trajectory}</p>
            </span>
            {props.anecdote !== '' && (
              <span className='block mt-1'>
                <strong className='me-1'>
                  {props.anecdote!.split('\n').length > 1
                    ? 'Anècdotes: '
                    : 'Anècdota: '}
                </strong>
                {props.anecdote!.split('\n').map((anec) => (
                  <p className='inline-block'>{anec}</p>
                ))}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ModalContent;
