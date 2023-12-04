
type TModalProps = {
    show: boolean;
    image: string;
    onModalClick: () => void;
}

const ImageModal = (props: TModalProps) => {
  return (
    <dialog data-modal open={props.show} className="z-50 top-15 rounded-2xl">
      <div className="rounded-2xl p-2 flex items-center flex-col bg-gray-100">
        <img src={props.image} alt="Foto" className="w-auto h-[70vh] m-auto rounded-2xl cursor-pointer" onClick={props.onModalClick}/>
      </div>
    </dialog>
  )
}

export default ImageModal