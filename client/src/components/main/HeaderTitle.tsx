type THeaderProps = {
  scrollRef?: React.RefObject<HTMLDivElement>;
};

const HeaderTitle = ({ scrollRef }: THeaderProps) => {
  return (
    <header className='mt-1' ref={scrollRef}>
      <h1 className='hidden text-center font-semibold text-gray-700 sm:block sm:text-2xl md:text-left lg:text-3xl xl:text-4xl'>
        ASSOCIACIO DE VETERANS
      </h1>
      <h1 className='hidden text-center font-semibold text-gray-700 sm:block sm:text-2xl md:text-left md:text-3xl lg:text-4xl xl:text-6xl'>
        HOQUEI PATINS FCB
      </h1>
      <h1 className='text-center text-2xl font-semibold text-gray-700 sm:hidden'>
        ASSOCIACIÓ VETERANS
        <br />
        HOQUEI PATINS FCB
      </h1>
      <div className='border-b border-gray-400 pb-2'></div>
    </header>
  );
};

export default HeaderTitle;
