import { Link } from 'react-router-dom';
import stickIcon from '../../../public/assets/logos/hockeyStick-no-bg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

type Props = {
  title: string;
  // iconItem: FontAwesomeIconProps;
  to?: string;
  onItemClick?: () => void;
  icon?: IconDefinition;
};

export const MenuItem = ({ title, to = '/', icon, onItemClick }: Props) => {
  return (
    <Link
      to={to}
      className="group flex justify-end py-1 pe-1 text-base transition-all duration-250 ease-in-out hover:bg-slate-100 rounded-lg hover:text-primary"
      onClick={onItemClick}
    >
      <div>
        {title}
        {icon && <FontAwesomeIcon icon={icon} className="ms-2" />}
        <img
          src={stickIcon}
          width="20"
          className="ms-1 hidden group-hover:inline-block transition-all duration-200 ease-in-out"
        />
      </div>
    </Link>
  );
};
