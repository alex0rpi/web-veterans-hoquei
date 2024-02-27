import React from 'react';
import { CardPerson, TitleSection } from '../UI-components';
import {
  ramonPons,
  antoniOrpinell2,
  jordiPi,
  joanTorner,
} from '../../assets/boardFotos';
import BoardGrid from './BoardGrid';

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
        Esse dolores numquam adipisci?.
      </p>
      <BoardGrid />
    </section>
  );
};

export default BoardMembers;
