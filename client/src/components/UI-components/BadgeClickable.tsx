type Props = {
  chapter: { season: string };
  index: number;
  currentElement: string;
  clickHandler: () => void;
};

const BadgeClickable = ({
  chapter,
  index,
  currentElement,
  clickHandler,
}: Props) => {
  return (
    <span
      key={index}
      className={`text-sm inline-block ${index % 2 === 0 ? 'bg-primary text-white' : 'bg-red-900 text-white'} rounded-md px-1 mx-1 ${chapter.season !== currentElement ? 'hover:scale-105 cursor-pointer' : 'cursor-default'} transition-all duration-200 ${chapter.season === currentElement && 'bg-gray-400 font-bold'}`}
      onClick={clickHandler}
    >
      {chapter.season}
    </span>
  );
};

export default BadgeClickable;
