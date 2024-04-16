import React, { useState } from 'react';
import { BoardModalCard, Button, TitleSection } from '../UI-components';
import BoardGrid from './BoardGrid';
import { people as peopleData, vocals as vocalsData } from '../../assets/infos/BoardList';
import { TBoardMemberInfos } from '../../types/Item-types';
import { useMediaQuery } from 'react-responsive';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AnimatePresence, motion } from 'framer-motion';

const people: TBoardMemberInfos[] = peopleData;
const vocals: TBoardMemberInfos[] = vocalsData;

const allPeople = [...people, ...vocals];

type TBoardProps = {
  scrollRef?: React.RefObject<HTMLDivElement>;
};

const BoardMembers = ({ scrollRef }: TBoardProps) => {
  const isMdScreenOrLarger = useMediaQuery({ minWidth: 768 });
  const [showVocals, setShowVocals] = useState<boolean>(false);
  const onClickShowVocals = () => {
    setShowVocals((prevState) => !prevState);
  };

  const [showModal, setShowModal] = useState(false);
  const [selectedMember, setSelectedMember] = useState<TBoardMemberInfos | null>(null);
  const toggleImageModal = () => {
    setShowModal((prevState) => !prevState);
  };
  const clickMemberHandler = (name: string) => {
    setSelectedMember(allPeople.find((p) => p.name === name) || null);
    setShowModal((prevState) => !prevState);
  };
  return (
    <section ref={scrollRef}>
      <TitleSection sectionTitle='Membres de la junta' />
      {showModal && (
        <BoardModalCard
          imageUrl={selectedMember?.imageUrl || []}
          name={selectedMember?.name || ''}
          role={selectedMember?.role || ''}
          playerSeasons={selectedMember?.playerSeasons || []}
          anecdote={selectedMember?.anecdote || ''}
          trajectory={selectedMember?.trajectory || ''}
          onModalClick={toggleImageModal}
          otherComment={selectedMember?.otherComment || ''}
        />
      )}
      <p className='text-primary font-semibold text-lg mb-2'>
        Els següents membres formen part de la junta i són els responsables de la gestió
        de l'Associació i Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
        quod sit magni ratione doloremque quas maxime!
      </p>
      {/* Board lists */}
      <div className='flex flex-col md:flex-row justify-evenly items-center mx-1'>
        <div className='w-full md:w-1/2 md:h-80'>
          <BoardGrid boardInfos={people} onMemberClick={clickMemberHandler} />
        </div>
        {!isMdScreenOrLarger ? (
          // Show button to toggle show vocal members
          <>
            <Button
              title={`${!showVocals ? 'Mostrar' : 'Ocultar'} vocals membres`}
              icon={
                !showVocals ? (
                  <FontAwesomeIcon icon={faPlus} />
                ) : (
                  <FontAwesomeIcon icon={faMinus} />
                )
              }
              onClick={onClickShowVocals}
              type='button'
            />
            <AnimatePresence>
              {showVocals && (
                <motion.div
                  className='w-full md:w-1/2 md:h-80 md:overflow-y-scroll'
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <BoardGrid boardInfos={vocals} onMemberClick={clickMemberHandler} />
                </motion.div>
              )}
            </AnimatePresence>
          </>
        ) : (
          // Show vocal members directly
          <div className='w-full md:w-1/2 md:h-80 md:overflow-y-scroll md:overflow-x-hidden'>
            <BoardGrid boardInfos={vocals} onMemberClick={clickMemberHandler} />
          </div>
        )}
      </div>
    </section>
  );
};

export default BoardMembers;
