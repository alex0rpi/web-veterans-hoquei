import { TBoardMemberInfos } from '../../types/Item-types';
import { BoardStackItem } from '../UI-components';

type TBoardlistProps = {
  boardInfos: TBoardMemberInfos[];
  onMemberClick: (name: string) => void;
};

const BoardList = ({ boardInfos, onMemberClick }: TBoardlistProps) => {
  return (
    <ul role='list' className='md:mx-auto'>
      {boardInfos.map((person, index) => (
        <BoardStackItem
          key={index}
          name={person.name}
          role={person.role}
          imageUrl={person.imageUrl}
          index={index}
          onMemberClick={onMemberClick}
        />
      ))}
    </ul>
  );
};

export default BoardList;
