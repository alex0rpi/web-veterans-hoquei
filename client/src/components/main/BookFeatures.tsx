import { FaHockeyPuck } from 'react-icons/fa';
import { GiHockey } from 'react-icons/gi';
import { MdOutlineSportsHockey } from 'react-icons/md';

const BookFeatures = () => {
  return (
    <section className="flex flex-column md:flex-row items-start justify-between mb-3">
      <div className="text-left mx-2">
        <GiHockey className="fa-3x" />
        <p className="text-lg font-semibold ">Des dels inicis fins a l'actualitat</p>
        <p className="text-md">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus ut ab sit,
          quod modi iste? Amet deserunt quos obcaecati laudantium.
        </p>
      </div>

      <div className="text-left mx-2">
        <FaHockeyPuck className="fa-3x" />
        <p className="text-lg font-semibold">
          Amb imatges històriques i documents inèdits
        </p>
        <p className="text-md">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit illum quo ipsum,
          alias maxime hic veniam eveniet ullam accusamus voluptates.
        </p>
      </div>

      <div className="text-left mx-2">
        <MdOutlineSportsHockey className="fa-3x" />
        <p className="text-lg font-semibold">Amb totes les dades per temporades</p>
        <p className="text-md">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, rem? Earum
          suscipit provident eaque illum necessitatibus id a labore illo!
        </p>
      </div>
    </section>
  );
};

export default BookFeatures;
