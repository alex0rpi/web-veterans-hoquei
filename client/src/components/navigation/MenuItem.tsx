import { Link } from "react-router-dom";

type Props = {
  title: string;
  // iconItem: FontAwesomeIconProps;
  to?: string;
  onItemClick?: () => void;
};

export const MenuItem = ({ title, to = "/", onItemClick }: Props) => {

  return (
    <Link
      to={to}
      className="flex justify-end py-1 pe-1 text-base transition-all duration-250 ease-in-out hover:bg-slate-100 rounded-lg hover:text-lg hover:text-primary"

      onClick={onItemClick}

    >
      {title}
    </Link>
  );
};
