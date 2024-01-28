// import pdf from '../../public/assets/documents/Llibre-veterans-hoquei-patins-fcb_compressed.pdf';

const pdfUrl =
  'http://localhost:4000/documents/Llibre-veterans-hoquei-patins-fcb_compressed.pdf';

const BookPage = () => {
  return (
    <div className="w-full h-full">
      <iframe
        title="Browser PDF Viewer"
        src={pdfUrl}
        allowFullScreen
        className="w-full h-[95vh] rounded-lg"
      />
    </div>
  );
};

export default BookPage;

/* When you set the src attribute of an iframe to a URL, the browser automatically makes a GET request to that URL to fetch the content. This is a synchronous operation from the perspective of your JavaScript code, because you don't have to use the Fetch API or another method to manually make the request. */
