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
      className={`text-xs sm:text-sm lg:text-md text-center inline-block ${index % 2 === 0 ? 'bg-primary text-white' : 'bg-red-900 text-white'} rounded-md px-[0.15rem] lg:px-1 mx-[0.1rem] lg:mx-1 ${season !== currentElement ? 'hover:scale-105 cursor-pointer' : 'cursor-default'} transition-all duration-100 ${season === currentElement && 'font-bold italic'}`}
      onClick={clickHandler}
    >
      {season}
    </span>
  );
};

export default BadgeClickable;
