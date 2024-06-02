import CardImageText from '../UI-components/CardImageText';
import { cardImages } from '../../assets/CardImages';
import { TitleSection } from '../UI-components';

const Association = () => {
  return (
    <section>
      <TitleSection sectionTitle='Qui som' />
      <div className='rounded-md mb-2'>
        {/* <h1 className='text-xl font-bold text-primary mb-2 inline-block ms-2'>
          La nostra missió
        </h1> */}
        <p className='text-primary font-semibold text-lg'>
          La missió de l'Associació de Veterans d'hoquei és arreplegar i crear germanor entre els
          ex-jugadors del Barça d'hoquei a través de reunions i activitats. Volem que aquestes
          trobades siguin per a un integrament de tots els ex-jugadors del Barça d'hoquei, i que
          aquests es sentin part d'una gran família.
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <CardImageText
          title='Activitats socials'
          text="Reunions a la llotja del Palau en els partits, dinars d'aplec, apertura a
            tot el món de l'hoquei i integració a l'Associació a través d'un
            carnet. Ajudes als membres
            amb dificultats."
          image={cardImages[0].src}
          lowResImage={cardImages[0].lowResSrc}
        />
        <CardImageText
          title='Activitats esportives'
          text='El nostre equip de veterans participa en el Campionat de Catalunya. Participem en tornejos
          nacionals i internacionals als què sóm convidats.'
          image={cardImages[1].src}
          lowResImage={cardImages[1].lowResSrc}
        />
      </div>
    </section>
  );
};

export default Association;
