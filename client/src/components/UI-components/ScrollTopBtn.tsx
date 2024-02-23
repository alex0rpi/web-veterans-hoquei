type TScrollTopBtn = {
  title: string;
  onClick?: () => void;
};
const ScrollTopBtn = ({ title, onClick }: TScrollTopBtn) => {
  return (
    <button
      onClick={onClick}
      style={{
        position: 'fixed',
        bottom: '50px',
        right: '50%',
        height: '50px',
        width: '50px',
        fontSize: '50px',
      }}
    >
      {title}
    </button>
  );
};

export default ScrollTopBtn;
