import pdf from '../assets/documents/document.pdf';

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
