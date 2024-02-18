import StickIcon from './StickIcon';

type TFlipCardProps = {
  hasStickIcon?: boolean;
  title: string;
  text: string;
  image: string;
};

const FlipCard = ({
  hasStickIcon = true,
  title,
  text,
  image,
}: TFlipCardProps) => {
  return (
    <div className='relative group rounded-lg overflow-hidden'>
      <img
        src={image}
        alt='Card'
        className='w-full h-auto object-cover transition-opacity duration-250 group-hover:opacity-15'
      />
      <h2 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center rounded-full text-primary text-xl transition-opacity duration-250 opacity-100 p-2 bg-white bg-opacity-75 group-hover:opacity-0'>
        {title}
      </h2>
      <div className='absolute inset-0 flex flex-col justify-start items-start translate-y-full opacity-0 group-hover:opacity-100 transition-all duration-250 group-hover:translate-y-0 m-4'>
        <p className='text-primary leading-7 text-lg font-semibold'>
          {hasStickIcon && <StickIcon />}
          {text}
        </p>
      </div>
    </div>
  );
};

export default FlipCard;
