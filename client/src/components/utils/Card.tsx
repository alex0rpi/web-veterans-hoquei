// import { useState } from 'react';
// import Modal from './ImageModal';

type Props = {
  foto: string;
};

export const Card = (props: Props) => {
  // const [show, setShow] = useState(false);

  // const hideImageModal = () => {
  //   setShow((prevState) => !prevState);
  // };
  return (
    <>
      {/* {show && <Modal image={props.foto} modalClick={hideImageModal} />} */}
      <img
        src={props.foto}
        alt="foto"
        className="card object-cover h-[320px] w-[400px] inline-block m-1"
      />
    </>
  );
};
