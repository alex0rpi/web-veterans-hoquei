
type TModalProps = {
    show: boolean;
    image: string;
    onModalClick: () => void;
}

const ImageModal = (props: TModalProps) => {
  return (
    <dialog data-modal open={props.show} className="z-50 top-10 rounded-2xl">
    <div className="rounded-2xl p-2 flex items-center flex-col bg-gray-300">
      <img src={props.image} alt="Foto" className="w-auto h-[70vh] m-auto rounded-2xl cursor-pointer" onClick={props.onModalClick}/>
      <form method="dialog" className="pt-2">
        <button className="btn border-primary text-primary transition duration-500 ease-out hover:bg-primary hover:text-white md:border-2">Tanca</button>
      </form>
    </div>
  </dialog>
  )
}

export default ImageModal