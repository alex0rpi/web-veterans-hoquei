import BoardItem from './BoardItem';

type BoardInfos = {
  name: string;
  email?: string;
  role: string;
  imageUrl: string;
};

type TBoardlistProps = {
  boardInfos: BoardInfos[];
  onMemberClick: (name: string) => void;
};

const BoardList = ({ boardInfos, onMemberClick }: TBoardlistProps) => {
  return (
    <ul role='list' className='divide-y divide-gray-100'>
      {boardInfos.map((person, index) => (
        <BoardItem
          key={index}
          email={person.email}
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
