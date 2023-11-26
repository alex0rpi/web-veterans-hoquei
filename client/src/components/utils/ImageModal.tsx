import ReactDOM from 'react-dom';

const Backdrop = () => {
  return <div className="fixed top-0 left-0 w-full h-full z-10 bg-y-950/[.5]" />;
};

type TModalOverlayProps = {
  image: string;
  modalClick: () => void;
};

const ModalOverlay = (props: TModalOverlayProps) => {
  return (
    <div className="fixed top-40 left-1/2 w-5/6 z-100 overflow-hidden">
      <img
        src={props.image}
        alt="foto"
        className="object-cover h-[320px] w-[400px] inline-block m-1"
      />
      <div className="flex justify-center">
        <div
          className="btn bg-secondary-100 text-secondary-200 hover:shadow-inner hover:bg-opacity-50 transform hover:scale-125 transition ease-out duration-500"
          onClick={props.modalClick}
        >
          Tancar
        </div>
      </div>
    </div>
  );
};

type TModalProps = {
  image: string;
  modalClick: () => void;
};

const Modal = (props: TModalProps) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, document.getElementById('backdrop-root')!)}
      {ReactDOM.createPortal(
        <ModalOverlay image={props.image} modalClick={props.modalClick} />,
        document.getElementById('modal-root')!
      )}
    </>
  );
};

export default Modal;
