type THeaderProps = {
  titleText: string;
  scrollRef?: React.RefObject<HTMLDivElement>;
};

const PageTitle = ({ titleText, scrollRef }: THeaderProps) => {
  return (
    <header className='ms-1 mt-4' ref={scrollRef}>
      <h1 className='hidden text-center font-semibold text-gray-700 sm:block sm:text-2xl md:text-left md:text-2xl lg:text-3xl xl:text-5xl'>
        {titleText}
      </h1>
      <h1 className='text-center text-2xl font-semibold text-gray-700 sm:hidden'>
        {titleText}
      </h1>
      <div className='border-b border-gray-400 pb-2'></div>
    </header>
  );
};

export default PageTitle;
