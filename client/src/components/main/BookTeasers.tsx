import { imatgeLlibre01, imatgeLlibre03 } from '../../assets/bookImages';
import { Button } from '../UI-components';
import { paths } from '../../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faFloppyDisk } from '@fortawesome/free-solid-svg-icons';

const BookTeasers = () => {
  return (
    <section className='my-4'>
      <p>
        Aquí podriem afegir imatges del contingut del llibre a mode de teaser. 3
        o 4 imatges, o les que vulguem. Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Aquesta es obra és producte d'un rigurós treball de
        recerca i documentació i blablabla.
      </p>
      <div className='my-1 flex flex-col items-center justify-center'>
        <p className='font-semibold mt-3 mb-2'>
          El relat de la història de la secció en un preciós treball de
          recopilació.{' '}
        </p>
        <img
          src={imatgeLlibre01}
          alt='Imatge llibre'
          className='rounded-lg mt-2 h-auto max-w-[75%]'
        />
        <p className='font-semibold mt-3 mb-2'>
          Una mica més de text aquí també
        </p>
        <img
          src={imatgeLlibre03}
          alt='Imatge llibre'
          className='h-auto max-w-[75%] rounded-lg'
        />
      </div>
      <div className='my-3 mx-auto flex flex-row gap-4 items-center justify-center'>
        <Button
          title="Visualitza'l"
          type='button'
          to={paths.book}
          icon={<FontAwesomeIcon icon={faEye} />}
        />
        <Button
          title="Descarrega'l HD"
          type='button'
          icon={<FontAwesomeIcon icon={faFloppyDisk} size='lg' />}
          // to={paths.book}
        />
      </div>
      <p className='font-semibold mt-3 mb-2'>Esments dels impulsors.</p>
    </section>
  );
};

export default BookTeasers;
