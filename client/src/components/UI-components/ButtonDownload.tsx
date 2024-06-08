import bookPdf from '../../assets/book/Llibre-veterans-hoquei-patins-fcb_compressed.pdf';

type TButtonProps = {
  title: string;
  icon?: React.ReactNode;
  disabled?: boolean;
};

const ButtonDownload = ({ title, icon, disabled }: TButtonProps) => {
  return (
    <a
      href={bookPdf}
      download
      className={`flex items-center justify-center border-2 border-primary bg-transparent hover:bg-primary hover:text-white transition duration-500 ease-out ${disabled ? 'opacity-50 pointer-events-none' : ''} btn`}
    >
      {icon && <span className='mr-2'>{icon}</span>}
      {title}
    </a>
  );
};

export default ButtonDownload;
