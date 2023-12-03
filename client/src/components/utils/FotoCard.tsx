import { useState } from "react";
import Modal from "./ModalImage";

type Props = {
  foto?: string;
};

export const FotoCard = (props: Props) => {
  const [show, setShow] = useState(false);

  const toggleImageModal = () => {
    setShow((prevState) => !prevState);
  };
  return (
    <>
      {props.foto && show && (
        <Modal image={props.foto} onBackdropClick={toggleImageModal} />
      )}

      <img
        src={props.foto}
        alt="foto"
        className="card m-1 inline-block h-[320px] w-[400px] object-cover"
        onClick={toggleImageModal}
      />
    </>
  );
};
