type TFlipCardProps = {
  title: string;
  text: string;
  image?: string;
};

const CardPerson = ({ title, text, image }: TFlipCardProps) => {
  return (
    <div className='relative group rounded-lg overflow-hidden w-64 h-40'>
      <img
        src={image}
        alt='Card'
        className='w-full h-auto object-contain transition-opacity duration-250 group-hover:opacity-15'
        loading='lazy'
      />
      <h2 className='absolute top-[85%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center rounded-md text-slate-300 text-xl transition-opacity duration-250 opacity-100 px-2 py-1 bg-slate-900 bg-opacity-75 group-hover:opacity-0'>
        {title}
      </h2>
      <div className='absolute inset-0 flex flex-col justify-start items-start translate-y-full opacity-0 group-hover:opacity-100 transition-all duration-250 group-hover:translate-y-0 m-4'>
        <p className='text-primary leading-7 text-lg font-semibold'>{text}</p>
      </div>
    </div>
  );
};

export default CardPerson;
