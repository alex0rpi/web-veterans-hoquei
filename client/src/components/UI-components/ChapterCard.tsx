// import stickIcon from '../../../public/assets/logos/hockeyStick-no-bg.png';
import stickIcon from '../../assets/logos/hockeyStick-no-bg.png';

import { Link } from 'react-router-dom';
import { TChapterListItem } from '../../types/Item-types';
import { paths } from '../../constants';

type TchapterCardProps = Omit<TChapterListItem, 'id'> & { index: number } & {
  goTo?: string;
} & { noLink?: boolean };

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
  const ShortenedTitleLength = 50;
  return (
    <Link
      to={
        props.noLink
          ? ''
          : !props.goTo
            ? `${paths.season.split(':')[0]}${props.season}`
            : `${paths.editChapter.split(':')[0]}${props.goTo}`
      }
    >
      <div className={`card block ${cardBg} p-2 h-full`}>
        {/* <GiHockey className="fa-2x inline-block" /> */}
        <img src={stickIcon} width='30' className='ms-1 inline-block' />

        <h1 className='inline text-center text-lg font-bold'>{props.season}</h1>
        <h1 className='my-1 text-left text-lg'>
          <strong>
            {truncateString(props.titlePro, ShortenedTitleLength)}
          </strong>
        </h1>
        <h1 className='mb-1 text-left text-lg'>
          {truncateString(props.titleBases, ShortenedTitleLength)}
        </h1>
        {/* <img src="" alt="chapter-foto" className="" /> */}
      </div>
    </Link>
  );
};
