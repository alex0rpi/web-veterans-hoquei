type TBoardItemProps = {
  email?: string;
  name: string;
  role: string;
  imageUrl: string;
  index: number;
};

const BoardItem = ({ email, name, role, imageUrl, index }: TBoardItemProps) => {
  const evenIndex = index % 2 === 0;
  const itemBg = evenIndex ? 'bg-slate-300' : 'bg-slate-200';
  return (
    <div
      key={email}
      className={`group ${itemBg} m-3 p-1 cursor-pointer rounded-lg transition-all duration-200 hover:opacity-95 hover:scale-105 flex justify-between`}
    >
      <div className='flex min-w-0 gap-x-4'>
        <img
          className='h-20 aspect-square flex-none rounded-full bg-gray-50 object-cover object-top'
          src={imageUrl}
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

export default BoardItem;
