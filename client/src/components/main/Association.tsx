import FlipCard from '../UI-components/FlipCardWithImage';
import { cardImage01 } from '../../assets/CardImages';

const Association = () => {
  return (
    <section className=''>
      <div className='rounded-md mb-2'>
        {/* <h1 className='text-xl font-bold text-primary mb-2 inline-block ms-2'>
          La nostra missió
        </h1> */}
        <p className='text-primary font-semibold text-lg'>
          La missió de l'Associació de Veterans d'hoquei és arreplegar i crear
          germanor entre els ex-jugadors del Barça d'hoquei a través de reunions
          i activitats. Volem que aquestes trobades siguin per a un integrament
          de tots els ex-jugadors del Barça d'hoquei, i que aquests es sentin
          part d'una gran família.
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <FlipCard
          title='Activitats socials'
          text="Reunions a la llotja del Palau en els partits d'hoquei, dinars
            d'aplec en els què col·laborem amb la organització, obertura a
            tot el món de l'hoquei i integració a l'Associació a través d'un
            carnet nominatiu. Ajudes econòmiques i socials als membres
            necessitats."
          image={cardImage01}
        />
        <FlipCard
          title='Activitats esportives'
          text='El nostre equip de veterans participa al Campionat de Catalunya i
          ocupa el lideratge en aquest moment. Participem en torneigs
          nacionals i internacionals als què sóm convidats.'
          image={cardImage01}
        />
      </div>
    </section>
  );
};

export default Association;