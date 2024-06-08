import bookPdf from '../assets/book/Llibre-veterans-hoquei-patins-fcb_compressed.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons';
import { HeaderTitle } from '../components/main';
import { TitleSection } from '../components/UI-components';

const BookPage = () => {
  // Detect if user is on mobile
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth < 768;

  return (
    <div className='w-full h-full flex items-start'>
      {isMobile ? (
        <div className='flex flex-col w-full'>
          <HeaderTitle />
          <TitleSection sectionTitle='Visualitzar el llibre' />

          <p className='text-primary font-semibold text-lg mb-2'>
            A continuació, pots visualitzar el llibre en format PDF o descarregar-lo al teu
            dispositiu. En ambdós casos, descarregaràs el mateix arxiu, que ocupa aproximadament 58
            MB. Si tries la primera opció, podràs veure el llibre en una nova pestanya. Si prems el
            botó de descàrrega, el llibre es guardarà a la memòria del teu dispositiu, permetent-te
            utilitzar els marcadors i altres funcionalitats útils del teu lector de PDFs.
          </p>

          <div className='text-center mx-auto w-full md:w-1/2 h-auto mt-3 space-y-6'>
            <a
              href={bookPdf}
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center justify-center border-2 border-primary bg-transparent hover:bg-primary hover:text-white transition duration-500 ease-out btn'
            >
              <p className='text-lg md:text-xl'>Obrir PDF en una nova pestanya</p>
            </a>
            <a
              href={bookPdf}
              download
              className={`flex text-white items-center justify-center border-2  bg-primary hover:bg-white hover:text-primary transition duration-500 ease-out btn`}
            >
              <span className='mr-4 my-1'>
                <FontAwesomeIcon icon={faFloppyDisk} size='xl' />
              </span>
              <p className='text-lg md:text-xl'>Descarrega'l</p>
            </a>
          </div>
        </div>
      ) : (
        <iframe
          title='Browser PDF Viewer'
          src={bookPdf}
          allowFullScreen
          className='w-full h-[92vh] md:h-[96vh] rounded-lg'
        />
      )}
    </div>
  );
};
export default BookPage;

/* When setting the src attribute of an iframe to a URL, the browser automatically
 makes a GET request to that URL to fetch the content. This is a SYNCHRONOUS operation. */
