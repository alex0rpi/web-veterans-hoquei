import { useContext, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "../UI-components/Button";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import FormInput from "../UI-components/FormInput";
import LoginService from "../../services/LoginService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { paths } from "../../constants";
import { loginSchema } from "../../validation";
import { Formik } from "formik";
import { TLoginForm } from "../../types/Item-types";

export const AdminLogin = () => {
  const initialValues: TLoginForm = {
    email: "",
    password: "",
    formError: null,
  };
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const onLoginHandler = async (values: TLoginForm) => {
    const formState = {
      email: values.email.trim(),
      password: values.password.trim(),
    };

    const user = await LoginService(formState);
    if (user) {
      setUser({ id: user.id, name: user.name, isVerified: user.isVerified });
      toast.info(`Benvingut ${user.name}!`);
      navigate(`${paths.userChapterList}`);
    }
  };

  // Auto-focus email input
  const emailInputRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    if (emailInputRef.current) {
      emailInputRef.current.focus();
    }
  }, []);

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ translateX: 0, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 250,
        damping: 30,
        duration: 250,
      }}
      exit={{ opacity: 0, x: "-100vw" }}
    >
      <h1 className="mt-10 border-b border-gray-400 pb-2 text-4xl font-medium text-gray-700">
        Accés per a membres
      </h1>
      <div className="mt-6 space-y-4 rounded-xl bg-slate-300 p-6 sm:p-8 md:space-y-6">
        <Formik
          initialValues={initialValues}
          validationSchema={loginSchema}
          onSubmit={onLoginHandler}
        >
          {(formik) => {
            return (
              <form onSubmit={formik.handleSubmit}>
                <FormInput
                  label="El teu email"
                  name="email"
                  type="email"
                  placeholder="email@email.com"
                  error={formik.touched.email ? formik.errors.email : undefined}
                  check={formik.touched.email && !formik.errors.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                <FormInput
                  label="Contrasenya"
                  name="password"
                  type="password"
                  placeholder="abcABC123!"
                  error={
                    formik.touched.password ? formik.errors.password : undefined
                  }
                  check={formik.touched.password && !formik.errors.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                <div className="my-2 w-full">
                  <Link
                    className="font-bold hover:underline hover:underline-offset-4 hover:decoration-[3px]"
                    to={
                      formik.values.email
                        ? `${paths.requestPasswordReset}?userEmail=${formik.values.email}`
                        : `${paths.requestPasswordReset}`
                    }
                  >
                    He oblidat la contrasenya
                  </Link>
                </div>
                <Button type="submit" title="Accedir" />
              </form>
            );
          }}
        </Formik>

        <p className="text-md font-light mt-2">
          No estàs registrat?{" "}
          <Link
            className="font-bold underline underline-offset-4 decoration-[3px] px-2 py-2 hover:border-2 border-rose-700 rounded-lg "
            to={paths.register}
          >
            Crear usuari
          </Link>
        </p>
      </div>
    </motion.div>
  );
};

export default AdminLogin;
