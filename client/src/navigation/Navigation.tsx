import logoImage from "../assets/logos/logo-no-text-removebg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { MenuItem } from "./MenuItem";
import { Backdrop } from "../components/utils/ImageModal";
import { motion } from "framer-motion";

//* Menu items will change whether the user is logged in or not

export const Navigation = () => {
  const [show, setShow] = useState(false);
  const clickHandler = () => {
    setShow((prevState) => !prevState);
  };
  return (
    <>
      <div className="md:col-span-1 md:col-start-2 md:flex md:justify-end">
        <nav className="w-full min-w-fit bg-sky-950 text-right text-slate-200">
          <div className="flex items-center justify-between border-b-2 border-gray-300 md:justify-center">
            <a
              href="/"
              className="z-50 px-4 py-1 transition duration-200 hover:scale-95 active:scale-100 md:py-2"
            >
              <img
                src={logoImage}
                className="h-14 brightness-125 md:h-24"
                alt="logo"
              />
            </a>
            {!show ? (
              <FontAwesomeIcon
                icon={faBars}
                size="xl"
                className="z-50 cursor-pointer px-8 transition duration-200 md:hidden"
                onClick={clickHandler}
              />
            ) : (
              <FontAwesomeIcon
                icon={faXmark}
                size="2xl"
                className="z-50 cursor-pointer px-8 transition duration-200 hover:scale-95 active:scale-100 md:hidden"
                onClick={clickHandler}
              />
            )}
          </div>
          <div className="mt-6 hidden w-full pe-2 ps-5 text-sm md:block">
            <MenuItem title="Home" />
            <MenuItem title="Accés" to="/admin/login" />
            <MenuItem title="El Llibre" />
            <MenuItem title="Junta" />
            <MenuItem title="Temporades" />
            <MenuItem title="Info jugadors" />
            <MenuItem title="Blog i notícies" />
            <MenuItem title="Enllaços" />
            <MenuItem title="On som" />
            <MenuItem title="Contacte" />
            <MenuItem title="Els meus epitafis" />
            <MenuItem title="El meus posts" />
            <MenuItem title="Crear epitafi" />
            <MenuItem title="Fer un post" />
            <MenuItem title="Les meves dades" />
            <MenuItem title="Desconnectar" />
          </div>
        </nav>
      </div>
      {show && (
        <>
          <Backdrop onClick={clickHandler} />
          <motion.div
            initial={{ x: "100vw" }}
            animate={{ x: "40vw" }}
            exit={{ x: "100vw" }}
            transition={{ duration: 0.2 }}
            className="right-0 top-20 z-50 w-[60vw] bg-sky-950 pb-2 pe-8 pt-2 text-slate-200 md:hidden"
          >
            <MenuItem title="Home" />
            <MenuItem title="Accés" to="/admin/login" />
            <MenuItem title="El Llibre" />
            <MenuItem title="Junta" />
            <MenuItem title="Temporades" />
            <MenuItem title="Info jugadors" />
            <MenuItem title="Blog i notícies" />
            <MenuItem title="Enllaços" />
            <MenuItem title="On som" />
            <MenuItem title="Contacte" />
            <MenuItem title="Els meus epitafis" />
            <MenuItem title="El meus posts" />
            <MenuItem title="Crear epitafi" />
            <MenuItem title="Fer un post" />
            <MenuItem title="Les meves dades" />
            <MenuItem title="Desconnectar" />
          </motion.div>
        </>
      )}
    </>
  );
};
