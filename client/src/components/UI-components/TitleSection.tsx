type TTitleProps = {
  sectionTitle: string;
};

const TitleSection = ({ sectionTitle }: TTitleProps) => {
  return (
    <h4 className='mb-3 mt-6 border-b border-gray-400 uppercase pb-2 text-3xl md:text-4xl font-medium text-gray-700'>
      {sectionTitle}
    </h4>
  );
};

export default TitleSection;
