type Props = {
  season: string;
  index: number;
  currentElement: string;
  clickHandler: () => void;
};

const BadgeClickable = ({ season, index, currentElement, clickHandler }: Props) => {
  return (
    <span
      key={index}
      className={`text-xs sm:text-sm lg:text-md text-center inline-block rounded-md px-[0.15rem] lg:px-1 mx-[0.1rem] lg:mx-1 ${season !== currentElement ? 'hover:scale-105 cursor-pointer' : 'cursor-default'} transition-all duration-100 ${season === currentElement ? 'font-bold italic bg-white text-primary border-primary border-2' : index % 2 === 0 ? 'bg-primary text-white' : 'bg-red-900 text-white'}`}
      onClick={clickHandler}
    >
      {season}
    </span>
  );
};

export default BadgeClickable;
