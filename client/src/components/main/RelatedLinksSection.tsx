import { TitleSection } from '../UI-components';

type componentProps = {
  id: string;
};

const RelatedLinksSection = ({ id }: componentProps) => {
  return (
    <section id={id}>
      <TitleSection sectionTitle="Enllaços d'interès" />
      <div className='flex justify-center'>
        <div className='btn bg-secondary-100 text-secondary-200 transform transition duration-500 ease-out hover:scale-125 hover:bg-opacity-50 hover:shadow-inner'>
          Alguns enllaços de webs on s'esmenta l'associació o els seus membres.
        </div>
      </div>
    </section>
  );
};

export default RelatedLinksSection;
