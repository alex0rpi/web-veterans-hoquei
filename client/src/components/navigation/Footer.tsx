const Footer = () => {
  return (
    <div className='lg:flex flex-col gap-3 justify-between mt-6 -mb-5 p-2 text-right text-slate-300 text-xs border-t-[1px] border-slate-300 absolute bottom-5'>
      <p className='mb-1 md:mb-0'>
        Copyright © {new Date().getFullYear()} - Associació de veterans
        d'hoquei patins del FCB
      </p>
      <a href='#' className='hover:underline'>
        Info sobre galetes🍪
      </a>
      <p className='mt-1 md:mt-0'>
        Fet amb 💟 per
        <a
          href='https://github.com/alex0rpi'
          target='_blank'
          rel='noopener noreferrer'
        >
          <span> </span>
          <i className='underline'>AlexOrpi</i>
        </a>
      </p>
    </div>
  );
};

export default Footer;
