import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type TUserGreetProps = {
  name: string;
  logOutHandler?: () => void;
};

const UserNameGreet = ({ name, logOutHandler }: TUserGreetProps) => {
  return (
    <div className='fixed top-0 md:right-[8vw] xl:right-[13vw] p-4'>
      <h1 className='flex items-center justify-end flex-row text-lg text-right text-gray-600'>
        Bon dia,
        <span className='font-bold text-lg text-right ms-1'>{name}</span>
        <div className='group flex relative'>
          {logOutHandler && (
            <FontAwesomeIcon
              icon={faRightFromBracket}
              className='ms-2 cursor-pointer hover:opacity-95 hover:translate-x-1 hover:scale-105 transition-all duration-300 ease-in-out'
              onClick={logOutHandler}
            />
          )}
          <span className='opacity-0 group-hover:opacity-100 transition-opacity bg-primary p-2 text-sm text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 translate-y-1/2 mt-2 mx-auto'>
            Sortir
          </span>
        </div>
      </h1>
    </div>
  );
};

export default UserNameGreet;
