type TModalProps = {
  show: boolean;
  image: string;
  onModalClick: () => void;
};

const ImageModal = (props: TModalProps) => {
  return (
    <dialog
      data-modal
      open={props.show}
      className='z-50 top-24 md:top-10 rounded-2xl'
    >
      <div className='rounded-2xl p-2 flex items-center flex-col bg-gray-100'>
        <img
          src={props.image}
          alt='Foto'
          className='max-w-full h-auto m-auto rounded-xl cursor-pointer'
          onClick={props.onModalClick}
        />
      </div>
    </dialog>
  );
};

export default ImageModal;
