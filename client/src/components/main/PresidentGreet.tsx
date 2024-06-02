import { Button, TitleSection } from '../UI-components';
import { presidentText } from '../../data/PresidentText';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type componentProps = {
  id: string;
};

const PresidentGreet = ({ id }: componentProps) => {
  const [expand, setExpand] = useState(false);
  const onClickExpand = () => {
    setExpand((prevState) => !prevState);
  };

  const padding = 'px-4 pt-3 pb-2';
  return (
    <section id={id}>
      <div className='flex flex-row justify-between items-center'>
        <div className='flex-grow'>
          <TitleSection sectionTitle='Carta del President' />
        </div>
        <Button
          title={`${!expand ? 'Mostrar' : 'Ocultar'}`}
          icon={!expand ? <FontAwesomeIcon icon={faPlus} /> : <FontAwesomeIcon icon={faMinus} />}
          onClick={onClickExpand}
          type='button'
        />
      </div>
      <AnimatePresence>
        {expand && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`${padding} w-full h-auto border-2 border-slate-400 bg-slate-200 rounded-lg overflow-hidden tracking-wide hover:cursor-pointer`}
            onClick={onClickExpand}
          >
            {presidentText.split('\n').map((line, index) => (
              <p key={index} className='text-primary font-light text-xl mb-2'>
                {line}
              </p>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      {!expand && (
        <div
          className={`${padding} w-full h-auto border-2 border-slate-400 bg-slate-200 rounded-lg overflow-hidden tracking-wide hover:cursor-pointer`}
          onClick={onClickExpand}
        >
          <p className='text-primary font-light text-lg mb-2'>{presidentText.split('\n')[0]}</p>
        </div>
      )}
      {/*   <div className='pt-2 flex justify-end'>
        <Button
          title={`${!expand ? 'Mostrar' : 'Ocultar'}`}
          icon={!expand ? <FontAwesomeIcon icon={faPlus} /> : <FontAwesomeIcon icon={faMinus} />}
          onClick={onClickExpand}
          type='button'
        />
      </div> */}
    </section>
  );
};

export default PresidentGreet;
