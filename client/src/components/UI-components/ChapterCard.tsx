// import { GiHockey } from 'react-icons/gi';
import stickIcon from '../../assets/logos/hockeyStick-no-bg.png';

import { Link } from 'react-router-dom';
import { TChapterListItem } from '../../types/Item-types';

type TchapterCardProps = Omit<TChapterListItem, 'id'> & { index: number };

export const ChapterCard = (props: TchapterCardProps) => {
  const evenIndex = props.index % 2 === 0;
  const cardBg = evenIndex ? 'bg-slate-400' : 'bg-slate-300';
  return (
    <Link to={`/temporades/${props.season}`}>
      <div className={`card block ${cardBg} p-2`}>
        {/* <GiHockey className="fa-2x inline-block" /> */}
        <img src={stickIcon} width="30" className="ms-1 inline-block" />

        <h1 className="inline text-center text-lg font-bold">{props.season}</h1>
        <h1 className="my-1 text-left text-lg">* {props.titlePro}</h1>
        <h1 className="mb-1 text-left text-lg">* {props.titleBases}</h1>
        {/* <img src="" alt="chapter-foto" className="" /> */}
      </div>
    </Link>
  );
};
