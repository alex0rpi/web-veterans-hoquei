import { Link } from 'react-router-dom';
import stickIcon from '../../assets/logos/hockeyStick-no-bg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';
import { paths } from '../../constants';

type Props = {
  title: string | React.ReactNode;
  to?: string;
  icon?: IconDefinition;
  scrollRef?: React.RefObject<HTMLDivElement>;
  onItemClick?: () => void;
  highlight?: boolean;
};

export const NavItem = ({
  title,
  to = '/',
  icon,
  onItemClick,
  scrollRef,
  highlight = false,
}: Props) => {
  const location = useLocation();
  let navFontSize: string = 'text-base';
  const isBookPage = location.pathname === paths.book;
  if (isBookPage) navFontSize = 'text-sm';

  const onScrollLinkClick = () => {
    scrollRef?.current?.scrollIntoView({
      behavior: 'smooth',
      block: title === 'Inici' ? 'center' : 'start',
    });
  };

  return (
    <Link
      to={scrollRef ? '#' : to}
      className={`text-right group flex justify-end py-1 pe-1 text-base transition-all duration-250 ease-in-out rounded-lg ${highlight ? 'bg-gradient-to-r from-primary to-slate-100 text-primary' : 'text-slate-200 hover:bg-slate-100  hover:text-primary'}`}
      onClick={onItemClick ? onItemClick : scrollRef && onScrollLinkClick}
    >
      <div className='flex flex-row items-center'>
        <p className={`${navFontSize}`}>{title}</p>
        {icon && !isBookPage && (
          <FontAwesomeIcon
            icon={icon}
            className='ms-2'
            size={`${isBookPage ? 'sm' : '1x'}`}
          />
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
