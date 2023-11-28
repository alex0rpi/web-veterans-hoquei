import NavList from "../../navigation/NavList";
import { Backdrop } from "./ImageModal";

type TSideDrawerProps = {
  onBackdropClick: () => void;
};

const SideDrawer = (props: TSideDrawerProps) => {
  return (
    <>
      <Backdrop onClick={props.onBackdropClick} />
      <NavList />
    </>
  );
};

export default SideDrawer;
