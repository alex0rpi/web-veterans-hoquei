import { Link } from "react-router-dom";

type TButtonProps = {
  type?: "button" | "submit";
  title: string;
  to?: string;
};

export const Button = ({ type = "button", title, to }: TButtonProps) => {
  return (
    <button
      type={type}
      className={`btn border-sky-950 text-sky-950 transition duration-500 ease-out hover:bg-sky-950 hover:text-white md:border-2`}
    >
      {to ? <Link to={to}>{title}</Link> : title}
    </button>
  );
};
