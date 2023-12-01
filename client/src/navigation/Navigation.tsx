import logoImage from "../assets/logos/logo-no-text-removebg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { MenuItem } from "./MenuItem";
import { Backdrop } from "../components/utils/ImageModal";
import { motion } from "framer-motion";
import { useAuth } from "../context/AuthProvider";

//* Menu items will change whether the user is logged in or not

export const Navigation = () => {
  const [show, setShow] = useState(false);
  const isLoggedIn = useAuth();
  const clickHandler = () => {
    setShow((prevState) => !prevState);
  };
  return (
    <>
      <div className="md:col-span-1 md:col-start-2 md:flex md:justify-end">
        <nav className="w-full min-w-fit bg-primary text-right text-slate-200">
            <motion.div
              initial={{x:'100%', opacity:0.2}}
              animate={{x:'0%', opacity:1}}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 10,
              
              }}
            >
          <div className="flex items-center justify-between md:justify-center">
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
                </motion.div>
          <div className="hidden w-full pe-2 pt-2 mt-0 ps-5 text-sm md:block border-t-2 border-gray-300">
            {isLoggedIn ? (
              <>
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
              </>
            ) : (
              <>
                <MenuItem title="Home" />
                <MenuItem title="Els meus epitafis" to="/admin/chapter-list" />
                <MenuItem title="El meus posts" />
                <MenuItem title="Crear epitafi" to="/admin/new-chapter" />
                <MenuItem title="Fer un post" />
                <MenuItem title="Les meves dades" />
                <MenuItem title="Desconnectar" />
              </>
            )}
          </div>
        </nav>
      </div>
      {show && (
        <>
          <Backdrop onClick={clickHandler} />
          <motion.div
            initial={{ x: "100vw", opacity: 0 }}
            animate={{ x: "40vw", opacity: 1 }}
            exit={{ x: "100vw", opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 z-50 w-[60vw] rounded-l-xl bg-primary px-8 pb-2 pt-2 text-slate-200 md:hidden"
          >
            {isLoggedIn ? (
              <>
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
              </>
            ) : (
              <>
                <MenuItem title="Home" />
                <MenuItem title="Els meus epitafis" to="/admin/chapter-list" />
                <MenuItem title="El meus posts" />
                <MenuItem title="Crear epitafi" to="/admin/new-chapter" />
                <MenuItem title="Fer un post" />
                <MenuItem title="Les meves dades" />
                <MenuItem title="Desconnectar" />
              </>
            )}
          </motion.div>
        </>
      )}
    </>
  );
};
