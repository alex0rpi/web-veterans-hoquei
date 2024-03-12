import { faCircleArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type TScrollTopBtn = {
  onClick?: () => void;
};
const ScrollTopBtn = ({ onClick }: TScrollTopBtn) => {
  return (
    <button
      onClick={onClick}
      style={{
        position: 'fixed',
        bottom: '5%',
        right: '5%',
        height: '40px',
        width: '40px',
        fontSize: '40px',
      }}
    >
      <FontAwesomeIcon icon={faCircleArrowUp} />
    </button>
  );
};

export default ScrollTopBtn;
