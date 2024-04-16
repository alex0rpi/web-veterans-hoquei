import { testimoni01, testimoni02, testimoni03 } from '../../assets/testimonis';

const BookTestimonials = () => {
  return (
    <section className='className=my-4'>
      <p className='text-web'>Esments dels impulsors.</p>
      <div className='grid gap-3 md:grid-cols-3'>
        <div className='text-center'>
          <img
            src={testimoni01}
            alt='testimonial_1'
            className='mx-auto mb-2 h-44 w-44 rounded-full object-cover '
            loading='lazy'
          />
          <p className='text-lg italic '>"Comentari."</p>
          <p className='font-semibold'>Ramon Pons, President de l'associació.</p>
        </div>

        <div className='text-center'>
          <img
            src={testimoni02}
            alt='testimonial_2'
            className='mx-auto mb-2 h-44 w-44 rounded-full object-cover'
            loading='lazy'
          />
          <p className='text-lg italic'>"Comentari."</p>
          <p className='font-semibold'>Antoni Orpinell, membre de la junta.</p>
        </div>

        <div className='text-center'>
          <img
            src={testimoni03}
            alt='testimonial_3'
            className='mx-auto mb-2 h-44 w-44 rounded-full object-cover'
            loading='lazy'
          />
          <p className='text-lg italic'>"Comentari."</p>
          <p className='font-semibold'>Carles Gallén Utset, redactor.</p>
        </div>
      </div>
    </section>
  );
};

export default BookTestimonials;
