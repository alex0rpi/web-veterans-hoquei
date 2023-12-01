import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    >
      <div className="mt-20 font-bold text-2xl text-center text-sky-950">
        <h1>Aquí no tenim res per mostrar❗</h1>
        <Link to="/" className="hover:underline underline-offset-4 decoration-4">Torna a l'inici</Link>
      </div>
    </motion.div>
  );
};

export default NotFound;
