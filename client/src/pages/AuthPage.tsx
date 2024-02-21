import { easeInOut, motion } from 'framer-motion';
import { AdminLogin, AdminRegister } from '../components/auth';
import { useLocation } from 'react-router-dom';

const AuthPage = () => {
  const location = useLocation();
  const isLogin = location.pathname === '/admin/login';
  const isRegister = location.pathname === '/admin/register';
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: easeInOut, duration: 1 }}
      exit={{ opacity: 0 }}
    >
      {isLogin && <AdminLogin />}
      {isRegister && <AdminRegister />}
    </motion.div>
  );
};

export default AuthPage;
