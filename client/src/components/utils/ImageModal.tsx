import { motion } from "framer-motion";
import ReactDOM from "react-dom";

type TBackdropProps = {
  onClick: () => void;
};

export const Backdrop = (props: TBackdropProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div
        className="fixed left-0 top-0 z-10 h-full w-full bg-slate-950/80"
        onClick={props.onClick}
      />
    </motion.div>
  );
};

type TModalOverlayProps = {
  image: string;
};

const ModalOverlay = (props: TModalOverlayProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <img
        src={props.image}
        alt="foto"
        className="fixed left-1/2 top-1/4 z-20 w-[60%] -translate-x-1/2 -translate-y-32 transform rounded-xl object-cover"
      />
    </motion.div>
  );
};

type TModalProps = {
  image: string;
  onBackdropClick: () => void;
};

const Modal = (props: TModalProps) => {
  console.log("Modal");

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onBackdropClick} />,
        document.getElementById("backdrop-root")!,
      )}
      {ReactDOM.createPortal(
        <ModalOverlay image={props.image} />,
        document.getElementById("modal-root")!,
      )}
    </>
  );
};

export default Modal;
