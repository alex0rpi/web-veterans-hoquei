import { bookImages } from '../../assets/bookImages';
import { ImageSlider, TitleSection } from '../UI-components';

type componentProps = {
  id: string;
};

const BookTeasers = ({ id }: componentProps) => {
  return (
    <section id={id} className='my-4'>
      <TitleSection sectionTitle='El llibre' />
      <p className='text-web'>
        El 15 de maig de 2019, l’Espai Barça Fundació va acollir un esdeveniment memorable: la
        presentació del llibre que narra la trajectòria de la secció d’hoquei patins del FC
        Barcelona. La sala París es va omplir d’una atmosfera de celebració i nostàlgia. Entre els
        assistents, es trobaven Ramon Pons, president de l’associació; Carles Gallèn, redactor
        principal de l’obra, que va compartir els detalls de la creació del llibre; i Imma
        Pedemonte, periodista esportiva, que va oferir una visió sobre els moments més destacats de
        l’esport. La vetllada va ser un reconeixement a les personalitats de l’hoquei patins,
        incloent veterans com el Paco Valsecchi, que van ser part fonamental dels inicis de la
        secció. Les imatges i documents inèdits projectats van recordar els moments gloriosos
        viscuts al llarg dels anys, i la cerimònia va ser un tribut a la història de l’hoquei patins
        i a aquells que han contribuït a la seva grandesa. Aquesta obra, resultat d’un meticulós
        treball de recerca i documentació, no només celebra els èxits passats, sinó que també aspira
        a inspirar a les futures generacions de l’hoquei patins.
      </p>
      <ImageSlider pictures={bookImages} />
    </section>
  );
};

export default BookTeasers;
