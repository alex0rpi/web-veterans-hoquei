type TBoardItemProps = {
  email: string;
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
      className={`group ${itemBg} m-2 p-2 cursor-pointer rounded-lg transition-all duration-200 hover:opacity-95 hover:scale-95 flex justify-between gap-x-6 py-5tailwind`}
    >
      <div className='flex min-w-0 gap-x-4'>
        <img
          className='h-12 w-12 flex-none rounded-full bg-gray-50'
          src={imageUrl}
          alt=''
        />
        <div className='min-w-0 flex-auto'>
          <p className='text-base font-semibold leading-6 text-gray-900'>
            {name}
          </p>
          <p className='mt-1 truncate text-xs leading-5 text-gray-500'>
            {email}
          </p>
        </div>
      </div>
      <div className='hidden shrink-0 sm:flex sm:flex-col sm:items-end'>
        <p className='font-semibold text-sm leading-6 text-gray-900'>{role}</p>
        <p className='mt-1 text-xs leading-5 text-gray-500'>
          Lorem ipsum dolor.
        </p>
      </div>
    </div>
  );
};

export default BoardItem;
