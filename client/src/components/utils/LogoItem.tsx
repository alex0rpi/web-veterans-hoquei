import logoImage from "../../assets/logos/logo-no-text-removebg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";

export const LogoItem = () => {
  return (
    <div className="flex items-center justify-between border-b-2 border-gray-300 md:justify-center">
      <a href="/" className="px-4 py-1 md:py-2">
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
      />
    </div>
  );
};
