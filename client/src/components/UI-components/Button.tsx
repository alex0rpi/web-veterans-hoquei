import { Link } from 'react-router-dom';

type TButtonProps = {
  type?: 'button' | 'submit';
  title: string;
  to?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  disabled?: boolean;
};

const Button = ({ type = 'button', title, to, onClick, icon, disabled }: TButtonProps) => {
  return (
    <button
      type={type}
      className={`flex items-center justify-center border-2 border-primary bg-transparent hover:bg-primary hover:text-white transition duration-500 ease-out ${disabled ? 'opacity-50 pointer-events-none' : ''} btn`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span className='mr-2'>{icon}</span>}
      {to ? (
        <Link to={to} className='flex items-center'>
          {title}
        </Link>
      ) : (
        title
      )}
    </button>
  );
};

export default Button;
