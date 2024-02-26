import { Link } from 'react-router-dom';

type TButtonProps = {
  type?: 'button' | 'submit';
  title: string;
  to?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
};

const Button = ({
  type = 'button',
  title,
  to,
  onClick,
  icon,
}: TButtonProps) => {
  return (
    <button
      type={type}
      className={`btn border-primary text-primary transition duration-500 ease-out hover:bg-primary hover:text-white md:border-2`}
      onClick={onClick}
    >
      {icon && <span className='mr-2'>{icon}</span>}
      {to ? <Link to={to}>{title}</Link> : title}
    </button>
  );
};

export default Button;
