import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { paths } from '../../constants';
import { Button, ButtonDownload, StickIcon } from '../UI-components';
import { faEye, faFloppyDisk } from '@fortawesome/free-solid-svg-icons';

const BookFeatures = () => {
  return (
    <section>
      <div className='mb-3 grid gap-3 md:grid-cols-3'>
        <div className='mx-2 text-left'>
          {/* <img src={stickIcon} width='30' className='ms-1 inline-block' /> */}
          <StickIcon />
          <p className='ms-1 inline text-lg font-bold text-primary'>
            Des dels inicis fins a l'actualitat
          </p>
          <p className='text-web-sm'>
            La història de l’hoquei patins del FC Barcelona és rica i plena de moments inoblidables.
            Des de la fundació de la secció, els jugadors, entrenadors i aficionats han viscut junts
            una trajectòria plena d’èxits i emocions.
          </p>
        </div>
        <div className='mx-2 text-left'>
          <StickIcon />
          <p className='ms-1 inline text-lg font-bold text-primary'>
            Amb imatges històriques i documents inèdits
          </p>
          <p className='text-web-sm'>
            Aquest llibre és una finestra al passat, que ens permet reviure les grans gestes dels
            nostres equips a través de fotografies i documents que no s’havien vist mai abans. És un
            homenatge als que van fer gran aquest esport.
          </p>
        </div>
        <div className='mx-2 text-left'>
          <StickIcon />
          <p className='ms-1 inline text-lg font-bold text-primary'>
            Amb totes les dades per temporades
          </p>
          <p className='text-web-sm'>
            Cada pàgina està carregada d’informació detallada sobre les diferents temporades,
            incloent estadístiques, resultats i anècdotes que donen vida a les xifres.
          </p>
        </div>
      </div>
      <p className='text-web'>
        El llibre està disponible per consultar i descarregar en format digital. Per ara la
        descàrrega està disponible en qualitat mitjana, en el futur es podrà descarregar en alta
        qualitat.
      </p>
      <div className='my-3 mx-auto flex flex-row gap-4 items-center justify-center'>
        <Button
          title="Visualitza'l"
          type='button'
          to={paths.book}
          icon={<FontAwesomeIcon icon={faEye} />}
        />
        <ButtonDownload
          title="Descarrega'l"
          icon={<FontAwesomeIcon icon={faFloppyDisk} size='lg' />}
        />
      </div>
    </section>
  );
};

export default BookFeatures;
