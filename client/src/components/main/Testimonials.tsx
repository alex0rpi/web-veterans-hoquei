import { testimoni01, testimoni02, testimoni03 } from '../../assets/testimonis';

const Testimonials = () => {
  return (
    <section className="flex flex-column md:flex-row items-center justify-between">
      <div className="text-center">
        <img
          src={testimoni01}
          alt="testimonial_1"
          className="rounded-full h-44 w-44 mb-2 object-cover mx-auto"
        />
        <p className="text-lg italic ">
          "Aquest es el meu comentari sobre aquest llibre."
        </p>
        <p className="font-semibold">Ramon Pons, President de l'associació.</p>
      </div>

      <div className="text-center">
        <img
          src={testimoni02}
          alt="testimonial_2"
          className="rounded-full h-44 w-44 mb-2 object-cover mx-auto"
        />
        <p className="text-lg italic">
          "Aquest es el meu comentari sobre aquest llibre."
        </p>
        <p className="font-semibold">Antoni Orpinell, membre de la junta.</p>
      </div>

      <div className="text-center">
        <img
          src={testimoni03}
          alt="testimonial_3"
          className="rounded-full h-44 w-44 mb-2 object-cover mx-auto"
        />
        <p className="text-lg italic">
          "Aquest es el meu comentari sobre aquest llibre."
        </p>
        <p className="font-semibold">Carles Gallén Utset, redactor.</p>
      </div>
    </section>
  );
};

export default Testimonials;
