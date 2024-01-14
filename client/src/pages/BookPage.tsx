import pdf from '../../public/assets/documents/Llibre-veterans-hoquei-patins-fcb_compressed.pdf';

const BookPage = () => {
  return (
    <div className="w-full h-full">
      <iframe
        title="Browser PDF Viewer"
        src={`${pdf}`}
        allowFullScreen
        className="w-full h-[95vh] rounded-lg"
      />
    </div>
  );
};

export default BookPage;
