import pdf from '../assets/documents/Llibre-veterans-hoquei-patins-fcb_compressed.pdf';

const BookPage = () => {
  return (
    <div>
      <iframe
        title="Browser PDF Viewer"
        src={`${pdf}`}
        allowFullScreen
        className="w-full h-screen rounded-lg"
      />
    </div>
  );
};

export default BookPage;
