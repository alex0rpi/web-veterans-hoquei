import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { paths } from '../../constants';
import { Button, StickIcon, TitleSection } from '../UI-components';
import { faEye, faFloppyDisk } from '@fortawesome/free-solid-svg-icons';

type TBookProps = {
  scrollRef?: React.RefObject<HTMLDivElement>;
};

const BookFeatures = ({ scrollRef }: TBookProps) => {
  return (
    <section ref={scrollRef}>
      <TitleSection sectionTitle='El llibre' />
      <div className='mb-3 grid gap-3 md:grid-cols-3'>
        <div className='mx-2 text-left'>
          {/* <img src={stickIcon} width='30' className='ms-1 inline-block' /> */}
          <StickIcon />
          <p className='ms-1 inline text-lg font-semibold'>
            Des dels inicis fins a l'actualitat
          </p>
          <p className='text-md'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
            ut ab sit, quod modi iste? Amet deserunt quos obcaecati laudantium.
          </p>
        </div>
        <div className='mx-2 text-left'>
          <StickIcon />
          <p className='ms-1 inline text-lg font-semibold'>
            Amb imatges històriques i documents inèdits
          </p>
          <p className='text-md'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
            ut ab sit, quod modi iste? Amet deserunt quos obcaecati laudantium.
          </p>
        </div>
        <div className='mx-2 text-left'>
          <StickIcon />
          <p className='ms-1 inline text-lg font-semibold'>
            Amb totes les dades per temporades
          </p>
          <p className='text-md'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
            ut ab sit, quod modi iste? Amet deserunt quos obcaecati laudantium.
          </p>
        </div>
      </div>
      <div className='my-3 mx-auto flex flex-row gap-4 items-center justify-center'>
        <Button
          title="Visualitza'l"
          type='button'
          to={paths.book}
          icon={<FontAwesomeIcon icon={faEye} />}
        />
        <Button
          title='Descàrrega HD'
          type='button'
          icon={<FontAwesomeIcon icon={faFloppyDisk} size='lg' />}
          // to={paths.book}
        />
      </div>
    </section>
  );
};

export default BookFeatures;
