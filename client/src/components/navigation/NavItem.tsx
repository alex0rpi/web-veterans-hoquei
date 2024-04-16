import { Link } from 'react-router-dom';
import stickIcon from '../../assets/logos/hockeyStick-no-bg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';
import { paths } from '../../constants';
import { useMediaQuery } from 'react-responsive';

type Props = {
  title: string;
  to?: string;
  icon?: IconDefinition;
  id?: string;
  onItemClick?: () => void;
  highlight?: boolean;
};

const NavItem = ({ title, to = '/', icon, id, onItemClick, highlight = false }: Props) => {
  const isMdScreenOrLarger = useMediaQuery({ minWidth: 768 });

  const location = useLocation();
  let navFontSize: string = 'text-base';
  const isBookPage = location.pathname === paths.book;
  if (isBookPage && isMdScreenOrLarger) navFontSize = 'text-sm';

  const lastItems = ['Contacte', 'Enllaços', 'On som'];

  const onScrollLinkClick = () => {
    if (id) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: title === 'Inici' ? 'center' : lastItems.includes(title) ? 'end' : 'start',
        });
      }
    }
  };

  return (
    <Link
      to={id ? '#' : to}
      className={`text-right group flex justify-end py-1 pe-1 text-base transition-all duration-250 ease-in-out rounded-lg ${highlight ? 'bg-gradient-to-r from-primary to-slate-100 text-primary' : 'text-slate-200 hover:bg-slate-100  hover:text-primary'}`}
      onClick={(event) => {
        if (onItemClick) {
          onItemClick();
        }
        if (id) {
          onScrollLinkClick();
          event.preventDefault(); // prevent navigation
        }
      }}
    >
      <div className='flex flex-row items-center'>
        <p className={`${navFontSize}`}>{title}</p>
        {icon && !isBookPage && (
          <FontAwesomeIcon icon={icon} className='ms-2' size={`${isBookPage ? 'sm' : '1x'}`} />
        )}
        <img
          src={stickIcon}
          width='20'
          className='ms-1 hidden group-hover:inline-block transition-all duration-200 ease-in-out'
        />
      </div>
    </Link>
  );
};

export default NavItem;
