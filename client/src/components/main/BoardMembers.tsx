import React, { useState } from 'react';
import { BoardModalCard, TitleSection } from '../UI-components';
import BoardGrid from './BoardGrid';
import { people as peopleData, vocals as vocalsData } from './BoardList';
import { TBoardMemberInfos } from '../../types/Item-types';

const people: TBoardMemberInfos[] = peopleData;
const vocals: TBoardMemberInfos[] = vocalsData;

const allPeople = [...people, ...vocals];

type TBoardProps = {
  scrollRef?: React.RefObject<HTMLDivElement>;
};

const BoardMembers = ({ scrollRef }: TBoardProps) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedMember, setSelectedMember] =
    useState<TBoardMemberInfos | null>(null);
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
          imageUrl={selectedMember?.imageUrl || ''}
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
        Els següents membres formen part de la junta i són els responsables de
        la gestió de l'Associació i Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Unde quod sit magni ratione doloremque quas maxime!
      </p>
      {/* Board lists */}
      <div className='flex flex-col md:flex-row justify-evenly items-center mx-1'>
        <div className='w-1/2 h-80'>
          <BoardGrid boardInfos={people} onMemberClick={clickMemberHandler} />
        </div>
        <div className='w-1/2 h-80 overflow-y-scroll  overflow-x-hidden'>
          <BoardGrid boardInfos={vocals} onMemberClick={clickMemberHandler} />
        </div>
      </div>
    </section>
  );
};

export default BoardMembers;
