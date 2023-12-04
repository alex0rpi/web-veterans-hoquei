import { motion } from "framer-motion";
import { Button } from "../utils/Button";
import FormInput from "./FormInput";
import { Link } from "react-router-dom";

const AdminRegister = () => {
  const onRegisterHandler = (e: React.FormEvent<HTMLFormElement>) => {
    console.log("onRegisterHandler", e.target);
    
  }
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
          Registrar nou membre
        </h1>
        <div className="mt-6 space-y-4 rounded-xl bg-slate-300 p-6 sm:p-8 md:space-y-6">
          <form onSubmit={onRegisterHandler}>
            <FormInput 
              label="El teu email"
              name="email"
              type="email"
              placeholder="email@email.com"
            />
            <FormInput 
              label="Contrasenya"
              name="password"
              type="password"
              placeholder="••••••••"
            />
            <FormInput 
              label="Confirma la contrasenya"
              name="confirm-password"
              type="password"
              placeholder="••••••••"
            />   
            <div className="w-full">
              <Button type="submit" title="Registrar" />
            </div>
          </form>
          <p className="text-sm font-light">
            Ja estàs registrat? <Link className="font-bold hover:underline hover:underline-offset-4 hover:decoration-[3px]" to="/admin/login">Accedeix</Link>
          </p>
        </div>
      </motion.div>
  );
};

export default AdminRegister;
