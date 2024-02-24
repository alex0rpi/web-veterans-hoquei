import { easeInOut, motion } from 'framer-motion';
import {
  AdminLogin,
  AdminRegister,
  RequestPasswordReset,
  UpdatePassword,
  UserVerify,
} from '../components/auth';
import { useLocation } from 'react-router-dom';
import { Navigation } from '../components/navigation/Navigation';
import { paths } from '../constants';

const AuthPage = () => {
  const location = useLocation();
  const isLogin = location.pathname === paths.login;
  const isRegister = location.pathname === paths.register;
  const isVerify = location.pathname === paths.verify;
  const isRequestPwdReset = location.pathname === paths.requestPasswordReset;
  const isUpdatePassword = location.pathname === paths.updatePassword;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: easeInOut, duration: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className='twoColLayout'>
        <Navigation />
        <div className='pageLayout'>
          {isLogin && <AdminLogin />}
          {isRegister && <AdminRegister />}
          {isVerify && <UserVerify />}
          {isRequestPwdReset && <RequestPasswordReset />}
          {isUpdatePassword && <UpdatePassword />}
        </div>
      </div>
    </motion.div>
  );
};

export default AuthPage;
