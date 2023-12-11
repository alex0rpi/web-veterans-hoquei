import { FaHockeyPuck } from 'react-icons/fa';
import { GiHockey } from 'react-icons/gi';
import { MdOutlineSportsHockey } from 'react-icons/md';
import { Button } from '../UI-components/Button';

const BookFeatures = () => {
  return (
    <section className="mb-3 grid gap-3 md:grid-cols-3">
      <div className="mx-2 text-left">
        <GiHockey className="fa-2x inline-block" />
        <p className="ms-1 inline text-lg font-semibold">
          Des dels inicis fins a l'actualitat
        </p>
        <p className="text-md">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus ut ab sit,
          quod modi iste? Amet deserunt quos obcaecati laudantium.
        </p>
      </div>
      <div className="mx-2 text-left">
        <FaHockeyPuck className="fa-2x inline-block" />
        <p className="ms-1 inline text-lg font-semibold">
          Amb imatges històriques i documents inèdits
        </p>
        <p className="text-md">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus ut ab sit,
          quod modi iste? Amet deserunt quos obcaecati laudantium.
        </p>
      </div>
      <div className="mx-2 text-left">
        <MdOutlineSportsHockey className="fa-2x inline-block" />
        <p className="ms-1 inline text-lg font-semibold">
          Amb totes les dades per temporades
        </p>
        <p className="text-md">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus ut ab sit,
          quod modi iste? Amet deserunt quos obcaecati laudantium.
        </p>
      </div>
      <div className="my-3 mx-auto md:col-span-1 md:col-start-2 flex gap-4">
        <Button title="Visualitza'l" type="button" />
        <Button title="Descarrega'l" type="button" />
      </div>
    </section>
  );
};

export default BookFeatures;
