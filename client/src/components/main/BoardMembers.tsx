import React from 'react';
import {
  // CardPerson,
  TitleSection,
} from '../UI-components';
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
  },
  {
    name: 'Agustí Vilar Capdevila',
    role: 'VICEPRESIDENT',
    imageUrl: agustiVilar2,
  },
  {
    name: 'Antoni Orpinell Enrech',
    role: 'SECRETARI',
    imageUrl: antoniOrpinell2,
  },
];

const vocals = [
  {
    name: 'Joan Torner i Corcoy',
    role: 'VOCAL',
    imageUrl: joanTorner,
  },
  {
    name: 'Jordi Pi Roca',
    role: 'VOCAL',
    imageUrl: jordiPi,
  },
  {
    name: 'Lluís Segarra Albareda',
    role: 'VOCAL',
    imageUrl: lluisSegarra,
  },
  {
    name: 'Jordi Martínez Rubió',
    role: 'VOCAL',
    imageUrl: tinoMartinez,
  },
  {
    name: 'Joan Brassal Vera',
    role: 'VOCAL',
    imageUrl: joanBrassal,
  },
  {
    name: 'Martí Valls Corbalán',
    role: 'VOCAL',
    imageUrl: martiValls,
  },
  {
    name: 'Isidre Gallofré Vidal',
    role: 'VOCAL',
    imageUrl: isidreGallofre,
  },
  {
    name: 'Robert Vilella Llort',
    role: 'VOCAL',
    imageUrl: robertVilella,
  },
  {
    name: 'Santiago Puigmartí Curbera',
    role: 'VOCAL',
    imageUrl: santiPuigmarti,
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
      <div className='flex flex-col md:flex-row justify-evenly items-center mx-1'>
        <div className='w-1/2 h-80'>
          <BoardGrid boardInfos={people} />
        </div>
        <div className='w-1/2 h-80 overflow-y-scroll  overflow-x-hidden'>
          <BoardGrid boardInfos={vocals} />
        </div>
      </div>
    </section>
  );
};

export default BoardMembers;
