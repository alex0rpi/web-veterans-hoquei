// import { GiHockey } from 'react-icons/gi';
import stickIcon from '../../assets/logos/hockeyStick-no-bg.png';

import { Link } from 'react-router-dom';
import { TChapterListItem } from '../../types/Item-types';

type TchapterCardProps = Omit<TChapterListItem, 'id'> & { index: number };

export const ChapterCard = (props: TchapterCardProps) => {
  const truncateString = (str: string, num: number) => {
    // If the length of str is less than or equal to num
    // just return str--don't truncate it.
    if (str.length <= num) {
      return str;
    }
    // Return str truncated with '...' concatenated to the end of str.
    return str.slice(0, num) + '...';
  };

  const evenIndex = props.index % 2 === 0;
  const cardBg = evenIndex ? 'bg-slate-400' : 'bg-slate-300';
  return (
    <Link to={`/temporades/${props.season}`}>
      <div className={`card block ${cardBg} p-2`}>
        {/* <GiHockey className="fa-2x inline-block" /> */}
        <img src={stickIcon} width="30" className="ms-1 inline-block" />

        <h1 className="inline text-center text-lg font-bold">{props.season}</h1>
        <h1 className="my-1 text-left text-lg">
          <strong>{truncateString(props.titlePro, 40)}</strong>
        </h1>
        <h1 className="mb-1 text-left text-lg">{truncateString(props.titleBases, 40)}</h1>
        {/* <img src="" alt="chapter-foto" className="" /> */}
      </div>
    </Link>
  );
};
