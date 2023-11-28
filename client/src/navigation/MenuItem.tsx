import { Link } from "react-router-dom";

type Props = {
  title: string;
  // iconItem: FontAwesomeIconProps;
  to?: string;
};

export const MenuItem = ({ title, to = "/" }: Props) => {
  return (
    <Link
      to={to}
      className="flex justify-end py-1 pe-1 text-base transition duration-500 ease-out hover:bg-slate-100 hover:text-lg hover:text-sky-950"
    >
      {title}
    </Link>
  );
};
