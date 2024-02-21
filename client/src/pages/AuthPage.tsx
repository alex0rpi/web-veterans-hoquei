import { easeInOut, motion } from 'framer-motion';
import { AdminLogin, AdminRegister, UserVerify } from '../components/auth';
import { useLocation } from 'react-router-dom';

const AuthPage = () => {
  const location = useLocation();
  const isLogin = location.pathname === '/admin/login';
  const isRegister = location.pathname === '/admin/register';
  const isVerify = location.pathname === '/admin/verify';
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: easeInOut, duration: 1 }}
      exit={{ opacity: 0 }}
    >
      {isLogin && <AdminLogin />}
      {isRegister && <AdminRegister />}
      {isVerify && <UserVerify />}
    </motion.div>
  );
};

export default AuthPage;
