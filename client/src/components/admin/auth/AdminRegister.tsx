// import React from 'react';

import { motion } from "framer-motion";
import { Button } from "../../utils/Button";
import { MainLayout } from "../../../layouts/Layout";

// type Props = {};

const AdminRegister = () => {
  return (
    <MainLayout>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ translateX: 0, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        exit={{ opacity: 0, x: "-100vw" }}
      >
        <h1 className="mt-10 border-b border-gray-400 pb-2 text-4xl font-medium text-gray-700">
          Registrar nou membre
        </h1>
        <div className="mt-6 space-y-4 rounded-xl bg-slate-300 p-6 sm:p-8 md:space-y-6">
          <form className="" action="#">
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
                className="mb-3 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900"
              />
            </div>
            <div>
              <label
                htmlFor="confirmPassword"
                className="mb-1 block text-sm font-semibold text-gray-900"
              >
                Confirma contrasenya
              </label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="••••••••"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 "
              />
            </div>
            <p className="my-3 text-sm font-light">
              Ja estàs registrat? Accedeix
            </p>
            <Button title="Accedir" to="/admin/login" />
          </form>
        </div>
      </motion.div>
    </MainLayout>
  );
};

export default AdminRegister;