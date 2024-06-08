import { TitleSection } from '../UI-components';

type componentProps = {
  id: string;
};

const Location = ({ id }: componentProps) => {
  return (
    <section id={id}>
      <TitleSection sectionTitle='On ens trobem' />
      <div id='location'>
        <p className='text-web'>
          La junta directiva de l’Associació manté reunions periòdiques a les oficines del FC
          Barcelona, on es tracten temes oficials.
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
