import React from 'react';
import {
  // CardPerson,
  TitleSection,
} from '../UI-components';
import {
  ramonPons,
  antoniOrpinell2,
  joanTorner,
  jordiPi,
  agustiVilar,
  // antoniOrpinell,
} from '../../assets/boardFotos';
import BoardGrid from './BoardGrid';

const people = [
  {
    name: 'Ramon Pons',
    role: 'PRESIDENT',
    imageUrl: ramonPons,
  },
  {
    name: 'Agustí Vilar',
    role: 'VICEPRESIDENT',
    imageUrl: agustiVilar,
  },
  {
    name: 'Antoni Orpinell',
    role: 'SECRETARI',
    imageUrl: antoniOrpinell2,
  },
];

const vocals = [
  {
    name: 'Joan Torné',
    role: 'VOCAL',
    imageUrl: joanTorner,
  },
  {
    name: 'Jordi Pi',
    role: 'VOCAL',
    imageUrl: jordiPi,
  },
  {
    name: 'Robert Vilella',
    role: 'VOCAL',
    imageUrl: joanTorner,
  },
  {
    name: 'Joan Brassal',
    role: 'VOCAL',
    imageUrl: jordiPi,
  },
  {
    name: 'Santi Puigmartí',
    role: 'VOCAL',
    imageUrl: joanTorner,
  },
  {
    name: 'Jordi Martínez',
    role: 'VOCAL',
    imageUrl: jordiPi,
  },
  {
    name: 'Lluís Segarra',
    role: 'VOCAL',
    imageUrl: jordiPi,
  },
  {
    name: 'Martí Valls',
    role: 'VOCAL',
    imageUrl: joanTorner,
  },
  {
    name: 'Isidre Gallofré',
    role: 'VOCAL',
    imageUrl: jordiPi,
  },
];

type TBoardProps = {
  scrollRef?: React.RefObject<HTMLDivElement>;
};

const BoardMembers = ({ scrollRef }: TBoardProps) => {
  return (
    <section ref={scrollRef}>
      <TitleSection sectionTitle='Membres de la junta' />
      <p className='text-primary font-semibold text-lg mb-2'>
        Els següents membres formen part de la junta i són els responsables de
        la gestió de l'Associació i Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Unde quod sit magni ratione doloremque quas maxime!
      </p>
      {/* Board lists */}
      <div className='flex flex-col md:flex-row justify-evenly items-center'>
        <div className='w-1/2'>
          <BoardGrid boardInfos={people} />
        </div>
        <div className='overflow-y-scroll h-80 w-1/2 overflow-x-hidden'>
          <BoardGrid boardInfos={vocals} />
        </div>
      </div>
    </section>
  );
};

export default BoardMembers;
