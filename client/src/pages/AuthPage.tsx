// import { easeInOut, motion } from 'framer-motion';
import {
  AdminLogin,
  AdminRegister,
  RequestPasswordReset,
  UpdatePassword,
  UserVerify,
} from '../components/auth';
import { useLocation } from 'react-router-dom';
import { paths } from '../constants';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { HeaderTitle } from '../components/main';

const AuthPage = () => {
  const { user } = useContext(UserContext);
  const location = useLocation();
  const isLogin = location.pathname === paths.login;
  const isRegister = location.pathname === paths.register;
  const isVerify = location.pathname === paths.verify;
  const isRequestPwdReset =
    location.pathname === paths.requestPasswordReset && user.isAuthenticated === false;
  const isUpdatePassword = location.pathname === paths.updatePassword;
  return (
    // <motion.div
    //   initial={{ opacity: 0 }}
    //   animate={{ opacity: 1 }}
    //   transition={{ type: easeInOut, duration: 1 }}
    //   exit={{ opacity: 0 }}
    // >
    <div>
      <HeaderTitle />

      {isLogin && <AdminLogin />}
      {isRegister && <AdminRegister />}
      {isVerify && <UserVerify />}
      {isRequestPwdReset && <RequestPasswordReset />}
      {isUpdatePassword && <UpdatePassword />}
    </div>
    // </motion.div>
  );
};

export default AuthPage;
