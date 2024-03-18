type TBoardItemProps = {
  name: string;
  role: string;
  imageUrl: string[];
  index: number;
  onMemberClick: (name: string) => void;
};

const BoardStackItem = ({
  name,
  role,
  imageUrl,
  index,
  onMemberClick,
}: TBoardItemProps) => {
  const evenIndex = index % 2 === 0;

  const itemBg = evenIndex ? 'bg-slate-400' : 'bg-slate-300';
  return (
    <div
      key={name}
      className={`group ${itemBg} m-3 p-1 cursor-pointer rounded-lg transition-all duration-200 hover:opacity-85 hover:scale-105 hover:shadow-xl md:flex md:justify-between w-4/5 md:w-auto mx-auto md:mx-2`}
      onClick={() => onMemberClick(name)}
    >
      <div className='flex min-w-0 gap-x-4'>
        <img
          className='h-20 aspect-square flex-none rounded-full bg-gray-50 object-cover object-top'
          src={imageUrl[0]}
          alt='membre de la junta'
        />
        <div className='min-w-0 my-auto'>
          <p className='text-lg font-semibold text-gray-900'>{name}</p>
          <p className='font-semibold text-md text-gray-900'>{role}</p>
        </div>
      </div>
    </div>
  );
};

export default BoardStackItem;
