type TBoardStackItemProps = {
  name: string;
  role: string;
  imageUrls: string[];
  index: number;
  onMemberClick: (name: string) => void;
  isVocal?: boolean;
};

const BoardStackItem = ({
  name,
  role,
  imageUrls,
  //  index,
  onMemberClick,
  isVocal,
}: TBoardStackItemProps) => {
  // const evenIndex = index % 2 === 0;

  // const itemBg = evenIndex ? 'bg-slate-400' : 'bg-slate-300';

  return (
    <div
      key={name}
      className={`group ${isVocal ? 'bg-gradient-to-r from-slate-300 to-slate-400' : 'bg-primary'} m-3 p-1 cursor-pointer rounded-lg transition-all duration-200 hover:bg-opacity-95 hover:scale-[103%] hover:shadow-xl md:flex md:justify-between w-4/5 md:w-auto mx-auto md:mx-2`}
      onClick={() => onMemberClick(name)}
    >
      <div className='flex min-w-0 gap-x-4'>
        <img
          className='h-20 aspect-square flex-none rounded-full bg-gray-50 object-cover object-top'
          src={imageUrls[0]}
          alt='membre de la junta'
          loading='lazy'
        />
        <div className='min-w-0 my-auto'>
          <p className={`text-lg font-semibold ${isVocal ? 'text-primary' : 'text-gray-200'}`}>
            {name}
          </p>
          <p className={`font-light text-md ${isVocal ? 'text-primary' : 'text-gray-200'}`}>
            {role}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BoardStackItem;
