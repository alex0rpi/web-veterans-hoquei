import { useState } from "react";
import Modal from "./ImageModal";

type Props = {
  foto: string;
};

export const Card = (props: Props) => {
  const [show, setShow] = useState(false);

  const toggleImageModal = () => {
    setShow((prevState) => !prevState);
  };
  return (
    <>
      {show && <Modal image={props.foto} onBackdropClick={toggleImageModal} />}
      {/* {show && <Modal />} */}
      <img
        src={props.foto}
        alt="foto"
        className="card m-1 inline-block h-[320px] w-[400px] object-cover"
        onClick={toggleImageModal}
      />
    </>
  );
};
