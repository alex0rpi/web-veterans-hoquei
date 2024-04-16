import { faCircleArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type TScrollTopBtn = {
  onClick?: () => void;
};
const ScrollTopBtn = ({ onClick }: TScrollTopBtn) => {
  return (
    <button
      onClick={onClick}
      className='fixed bottom-[5%] right-[5%] h-[40px] w-[40px] text-[45px] active:text-gray-500'
    >
      <FontAwesomeIcon icon={faCircleArrowUp} />
    </button>
  );
};

export default ScrollTopBtn;
