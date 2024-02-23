// import { FaHockeyPuck } from 'react-icons/fa';
// import { GiHockey } from 'react-icons/gi';
// import { MdOutlineSportsHockey } from 'react-icons/md';
import StickIcon from '../UI-components/StickIcon';

type TBookProps = {
  scrollRef: React.RefObject<HTMLDivElement>;
};

const BookFeatures = ({ scrollRef }: TBookProps) => {
  return (
    <section ref={scrollRef}>
      <h4 className='mb-3 mt-6 border-b border-gray-400 pb-2 text-4xl font-medium text-gray-700'>
        LLIBRE
      </h4>
      <section className='mb-3 grid gap-3 md:grid-cols-3'>
        <div className='mx-2 text-left'>
          {/* <img src={stickIcon} width='30' className='ms-1 inline-block' /> */}
          <StickIcon />
          <p className='ms-1 inline text-lg font-semibold'>
            Des dels inicis fins a l'actualitat
          </p>
          <p className='text-md'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
            ut ab sit, quod modi iste? Amet deserunt quos obcaecati laudantium.
          </p>
        </div>
        <div className='mx-2 text-left'>
          <StickIcon />
          <p className='ms-1 inline text-lg font-semibold'>
            Amb imatges històriques i documents inèdits
          </p>
          <p className='text-md'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
            ut ab sit, quod modi iste? Amet deserunt quos obcaecati laudantium.
          </p>
        </div>
        <div className='mx-2 text-left'>
          <StickIcon />
          <p className='ms-1 inline text-lg font-semibold'>
            Amb totes les dades per temporades
          </p>
          <p className='text-md'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
            ut ab sit, quod modi iste? Amet deserunt quos obcaecati laudantium.
          </p>
        </div>
      </section>
    </section>
  );
};

export default BookFeatures;
