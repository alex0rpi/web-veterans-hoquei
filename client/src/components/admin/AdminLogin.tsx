import { motion } from "framer-motion";
import { Button } from "../utils/Button";

import {useContext} from 'react'
import { useNavigate } from "react-router-dom";
import {UserContext} from "../../context/UserContext";

// type Props = {};

export const AdminLogin = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const onLoginSubmitHandler = () => {
    console.log("Login submitted");
    setUser({name: 'Alex', email: 'alex@alex.com'});
    navigate("/admin/new-chapter");
  };
  return (
      <motion.div
        initial={{ scale: 0 }}
        animate={{ translateX: 0, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 30,
          duration: 250
        }}
        exit={{ opacity: 0, x: "-100vw" }}
      >
        <h1 className="mt-10 border-b border-gray-400 pb-2 text-4xl font-medium text-gray-700">
          Accés per a membres
        </h1>
        <div className="mt-6 space-y-4 rounded-xl bg-slate-300 p-6 sm:p-8 md:space-y-6">
          <form className="" action="#" onSubmit={onLoginSubmitHandler}>
            <div>
              <label
                htmlFor="email"
                className="mb-1 block text-sm font-semibold text-gray-900"
              >
                El teu email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="mb-3 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900"
                placeholder="email@email.com"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="mb-1 block text-sm font-semibold text-gray-900"
              >
                Contrasenya
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 "
              />
            </div>
            <div className="my-3 w-full">
              <Button type="submit" title="Accedir" />
              <a
                href="#"
                className="block text-sm font-medium hover:font-semibold hover:underline"
              >
                He oblidat la contrasenya
              </a>
            </div>
          </form>
          <p className="mb-3 text-sm font-light">
            Ets membre i no estàs registrat?
          </p>
          <Button title="Registrar-me" to="/admin/register" />
        </div>
      </motion.div>
  );
};

export default AdminLogin;
