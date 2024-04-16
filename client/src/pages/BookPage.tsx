// const pdfUrl = `${import.meta.env.VITE_BACKEND_URL}/api/v1/documents/Llibre-veterans-hoquei-patins-fcb_compressed.pdf`;
import bookPdf from '../assets/book/Llibre-veterans-hoquei-patins-fcb_compressed.pdf';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { pdfjs } from 'react-pdf';

const BookPage = () => {
  // Detect if user is on mobile
  // const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
  // const isMobile = window.innerWidth < 768;
  // let content;
  // if (isMobile) {
  const newplugin = defaultLayoutPlugin();
  const content = (
    <div className='w-full h-[93vh] md:h-[95vh] rounded-lg'>
      {/* <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js`}> */}
      <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`}>
        {/*       {dataUrl ? (
              <Viewer fileUrl={dataUrl} plugins={[newplugin]} />
            ) : ( */}
        {bookPdf ? (
          <Viewer fileUrl={bookPdf} plugins={[newplugin]} />
        ) : (
          <div>
            <h2 className='text-primary text-xl font-semibold'>Carregant...</h2>
          </div>
        )}
      </Worker>
    </div>
  );
  // }
  // else {
  //   content = (
  //     <iframe
  //       title='Browser PDF Viewer'
  //       src={bookPdf}
  //       allowFullScreen
  //       className='w-full h-[89vh] md:h-[95vh] rounded-lg'
  //     />
  //   );
  // }
  return <div className='w-full h-full'>{content}</div>;
};
export default BookPage;

/* When setting the src attribute of an iframe to a URL, the browser automatically
 makes a GET request to that URL to fetch the content. This is a SYNCHRONOUS operation. */

// const [dataUrl, setDataUrl] = useState<string | null>(null);

/*   useEffect(() => {
    fetch(bookPdf)
      .then((response) => response.blob())
      .then((blob) => {
        const reader = new FileReader();
        reader.onloadend = () => setDataUrl(reader.result as string);
        reader.readAsDataURL(blob);
      });
  }, []); */
