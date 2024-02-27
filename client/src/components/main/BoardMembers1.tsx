import React from 'react';
import { CardPerson, TitleSection } from '../UI-components';
import {
  ramonPons,
  antoniOrpinell2,
  jordiPi,
  joanTorner,
} from '../../assets/boardFotos';

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
      <div className='flex justify-center'>
        <div className='grid gap-3 md:grid-cols-2 lg:grid-cols-3'>
          <CardPerson
            title='President'
            text='una mica de biografia'
            image={ramonPons}
          />
          <CardPerson
            title='Secretari'
            text='una mica de biografia'
            image={antoniOrpinell2}
          />
          <CardPerson
            title='Vocal'
            text='una mica de biografia'
            image={joanTorner}
          />
          <CardPerson
            title='Vocal'
            text='una mica de biografia'
            image={joanTorner}
          />
          <CardPerson
            title='Vocal'
            text='una mica de biografia'
            image={joanTorner}
          />
          <CardPerson
            title='Vocal'
            text='una mica de biografia'
            image={jordiPi}
          />
          <CardPerson
            title='President'
            text='una mica de biografia'
            image={ramonPons}
          />
          <CardPerson
            title='Secretari'
            text='una mica de biografia'
            image={antoniOrpinell2}
          />
          <CardPerson
            title='Vocal'
            text='una mica de biografia'
            image={joanTorner}
          />
          <CardPerson
            title='Vocal'
            text='una mica de biografia'
            image={joanTorner}
          />
          <CardPerson
            title='Vocal'
            text='una mica de biografia'
            image={joanTorner}
          />
          <CardPerson
            title='Vocal'
            text='una mica de biografia'
            image={jordiPi}
          />
        </div>
      </div>
    </section>
  );
};

export default BoardMembers;
