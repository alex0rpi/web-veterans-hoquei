import { motion } from 'framer-motion';

import { Button } from '../../utils/Button';

// type Props = {};

export const AdminLogin = () => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ translateX: 0, scale: 1 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
      }}
      exit={{ opacity: 0, x: '-100vw' }}
    >
      <h1 className="text-gray-700 text-4xl font-medium mt-10 border-b border-gray-400 pb-2">
        Accés per a membres
      </h1>
      <div className="bg-slate-300 rounded-xl mt-6 p-6 space-y-4 md:space-y-6 sm:p-8">
        <form className="" action="#">
          <div>
            <label
              htmlFor="email"
              className="block mb-1 text-sm font-semibold text-gray-900"
            >
              El teu email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 mb-3"
              placeholder="email@email.com"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-1 text-sm font-semibold text-gray-900"
            >
              Contrasenya
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 "
            />
          </div>
          <a href="#" className="text-sm font-medium hover:underline">
            He oblidat la contrasenya
          </a>

          <p className="text-sm font-light my-3">Ets membre i no estàs registrat?</p>
          <Button title="Registrar-me" to="/admin/register" />
        </form>
      </div>
    </motion.div>
  );
};

export default AdminLogin;
