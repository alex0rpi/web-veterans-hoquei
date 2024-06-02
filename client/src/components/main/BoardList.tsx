import { TBoardMemberInfos } from '../../types/Item-types';
import { BoardStackItem } from '../UI-components';

type TBoardlistProps = {
  boardInfos: TBoardMemberInfos[];
  onMemberClick: (name: string) => void;
  isVocal?: boolean;
};

const BoardList = ({ boardInfos, onMemberClick, isVocal }: TBoardlistProps) => {
  return (
    <ul role='list' className='md:mx-auto'>
      {boardInfos.map((person, index) => (
        <BoardStackItem
          key={index}
          name={person.name}
          role={person.role}
          imageUrls={person.imageUrls}
          index={index}
          onMemberClick={onMemberClick}
          isVocal={isVocal}
        />
      ))}
    </ul>
  );
};

export default BoardList;
