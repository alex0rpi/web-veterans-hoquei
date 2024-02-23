type TLocationProps = {
  scrollRef: React.RefObject<HTMLDivElement>;
};

const Location = ({ scrollRef }: TLocationProps) => {
  return (
    <section ref={scrollRef}>
      <h4 className='mb-3 mt-6 border-b border-gray-400 pb-2 text-4xl font-medium text-gray-700'>
        On Som
      </h4>
      <div id='location'>
        <p className='mb-4'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
          deserunt recusandae iure officiis quia saepe at velit ad eum tenetur
          magnam, nihil voluptate sit totam ut reiciendis iusto harum doloribus.
        </p>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2667.082653831765!2d2.1198797544514036!3d41.3806298105058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sCamp%20Nou!5e0!3m2!1ses-419!2ses!4v1690207585290!5m2!1ses-419!2ses'
          allowFullScreen
          className='mx-auto h-96 w-full rounded-xl shadow-xl'
        ></iframe>
      </div>
    </section>
  );
};

export default Location;
