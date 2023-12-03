import logoImage from "../../assets/logos/logo-no-text-removebg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { useState } from "react";
import SideDrawer from "../navigation/SideDrawer";

export const LogoItem = () => {
  const [show, setShow] = useState(false);
  const clickHandler = () => {
    setShow((prevState) => !prevState);
    const mobileMenu = document.getElementById("menu");
    mobileMenu?.classList.toggle("hidden");
  };
  return (
    <div className="flex items-center justify-between border-b-2 border-gray-300 md:justify-center">
      <a
        href="/"
        className="px-4 py-1 transition duration-200 hover:scale-95 active:scale-100 md:py-2"
      >
        <img
          src={logoImage}
          className="h-14 brightness-125 md:h-24"
          alt="logo"
          // width="96px"
        />
      </a>
      <FontAwesomeIcon
        icon={faBars}
        size="xl"
        className="cursor-pointer px-8 md:hidden"
        id="burger"
        onClick={clickHandler}
      />
      {show && <SideDrawer onBackdropClick={clickHandler} />}
    </div>
  );
};
