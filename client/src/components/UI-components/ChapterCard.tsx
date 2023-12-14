import { GiHockey } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { ChapterListItem } from '../../types/Item-types';

type chapterCardProps = Omit<ChapterListItem, 'id'> & { index: number };

export const ChapterCard = (props: chapterCardProps) => {
  const evenIndex = props.index % 2 === 0;
  const cardBg = evenIndex ? 'bg-slate-400' : 'bg-slate-300';
  return (
    <Link to={`/temporades/${props.season}`}>
      <div className={`card block ${cardBg} p-2`}>
        <GiHockey className="fa-2x inline-block" />
        <h1 className="inline text-center text-lg font-bold">{props.season}</h1>
        <h1 className="my-1 text-left text-lg">* {props.titlePro}</h1>
        <h1 className="mb-1 text-left text-lg">* {props.titleBases}</h1>
        {/* <img src="" alt="chapter-foto" className="" /> */}
      </div>
    </Link>
  );
};
