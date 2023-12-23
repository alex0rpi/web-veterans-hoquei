import { Link } from 'react-router-dom';
import stickIcon from '../../assets/logos/hockeyStick-no-bg.png';

type Props = {
  title: string;
  // iconItem: FontAwesomeIconProps;
  to?: string;
  onItemClick?: () => void;
};

export const MenuItem = ({ title, to = '/', onItemClick }: Props) => {
  return (
    <Link
      to={to}
      className="group flex justify-end py-1 pe-1 text-sm transition-all duration-250 ease-in-out hover:bg-slate-100 rounded-lg hover:text-base hover:text-primary"
      onClick={onItemClick}
    >
      <div>
        {title}
        <img
          src={stickIcon}
          width="20"
          className="ms-1 hidden group-hover:inline-block transition-all duration-250 ease-in-out"
        />
      </div>
    </Link>
  );
};
