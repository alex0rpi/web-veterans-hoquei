import { Link } from 'react-router-dom';

type TButtonProps = {
  type?: 'button' | 'submit';
  title: string;
  to?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  disabled?: boolean;
  inverted?: boolean;
};

const Button = ({
  type = 'button',
  title,
  to,
  onClick,
  icon,
  disabled,
  inverted,
}: TButtonProps) => {
  return (
    <button
      type={type}
      className={`btn ${!inverted ? 'border-primary text-primary  hover:bg-primary hover:text-white' : 'border-white text-white  hover:bg-white hover:text-primary'} md:border-2 transition duration-500 ease-out`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span className='mr-2'>{icon}</span>}
      {to ? <Link to={to}>{title}</Link> : title}
    </button>
  );
};

export default Button;
