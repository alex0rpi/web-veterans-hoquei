import React, { useState } from 'react';
import { ModalCard, TitleSection } from '../UI-components';
import {
  ramonPons,
  agustiVilar2,
  antoniOrpinell2,
  joanTorner,
  jordiPi,
  isidreGallofre,
  robertVilella,
  tinoMartinez,
  lluisSegarra,
  joanBrassal,
  martiValls,
  santiPuigmarti,
} from '../../assets/boardFotos';
import BoardGrid from './BoardGrid';

const people = [
  {
    name: 'Ramon Pons Vidal',
    role: 'PRESIDENT',
    imageUrl: ramonPons,
    description: 'Una breu explicació de la seva trajectòria i experiència.',
  },
  {
    name: 'Agustí Vilar Capdevila',
    role: 'VICEPRESIDENT',
    imageUrl: agustiVilar2,
    description: 'Una breu explicació de la seva trajectòria i experiència.',
  },
  {
    name: 'Antoni Orpinell Enrech',
    role: 'SECRETARI',
    imageUrl: antoniOrpinell2,
    description:
      'Una breu explicació de la seva trajectòria i experiència. Una breu explicació de la seva trajectòria i experiència.Una breu explicació de la seva trajectòria i experiència.Una breu explicació de la seva trajectòria i experiència.Una breu explicació de la seva trajectòria i experiència.Una breu explicació de la seva trajectòria i experiència.Una breu explicació de la seva trajectòria i experiència. Una breu explicació de la seva trajectòria i experiència.Una breu explicació de la seva trajectòria i experiència.Una breu explicació de la seva trajectòria i experiència.Una breu explicació de la seva trajectòria i experiència.',
  },
];

const vocals = [
  {
    name: 'Joan Torner i Corcoy',
    role: 'VOCAL',
    imageUrl: joanTorner,
    description: 'Una breu explicació de la seva trajectòria i experiència.',
  },
  {
    name: 'Jordi Pi Roca',
    role: 'VOCAL',
    imageUrl: jordiPi,
    description: 'Una breu explicació de la seva trajectòria i experiència.',
  },
  {
    name: 'Lluís Segarra Albareda',
    role: 'VOCAL',
    imageUrl: lluisSegarra,
    description: 'Una breu explicació de la seva trajectòria i experiència.',
  },
  {
    name: 'Jordi Martínez Rubió',
    role: 'VOCAL',
    imageUrl: tinoMartinez,
    description: 'Una breu explicació de la seva trajectòria i experiència.',
  },
  {
    name: 'Joan Brassal Vera',
    role: 'VOCAL',
    imageUrl: joanBrassal,
    description: 'Una breu explicació de la seva trajectòria i experiència.',
  },
  {
    name: 'Martí Valls Corbalán',
    role: 'VOCAL',
    imageUrl: martiValls,
    description: 'Una breu explicació de la seva trajectòria i experiència.',
  },
  {
    name: 'Isidre Gallofré Vidal',
    role: 'VOCAL',
    imageUrl: isidreGallofre,
    description: 'Una breu explicació de la seva trajectòria i experiència.',
  },
  {
    name: 'Robert Vilella Llort',
    role: 'VOCAL',
    imageUrl: robertVilella,
    description: 'Una breu explicació de la seva trajectòria i experiència.',
  },
  {
    name: 'Santiago Puigmartí Curbera',
    role: 'VOCAL',
    imageUrl: santiPuigmarti,
    description: 'Una breu explicació de la seva trajectòria i experiència.',
  },
];

const allPeople = [...people, ...vocals];

type BoardInfos = {
  name: string;
  email?: string;
  role: string;
  imageUrl: string;
  description: string;
};

type TBoardProps = {
  scrollRef?: React.RefObject<HTMLDivElement>;
};

const BoardMembers = ({ scrollRef }: TBoardProps) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedMember, setSelectedMember] = useState<BoardInfos | null>(null);
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
        <ModalCard
          // show={showModal}
          image={selectedMember?.imageUrl || ''}
          name={selectedMember?.name || ''}
          role={selectedMember?.role || ''}
          description={selectedMember?.description || ''}
          onModalClick={toggleImageModal}
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
