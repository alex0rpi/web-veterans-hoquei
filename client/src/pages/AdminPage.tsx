import { easeInOut, motion } from 'framer-motion';
import {
  AdminChapterList,
  AdminChapterEdit,
  AdminChapterNew,
  AdminData,
} from '../components/Admin';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { paths } from '../constants';
import { useContext, useEffect } from 'react';
import { UserContext } from '../context/UserContext';

const AdminPage = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  useEffect(() => {
    if (!user.isAuthenticated) {
      navigate(paths.home);
    }
  }, [user.isAuthenticated, navigate]);
  const location = useLocation();
  const isChapterList = location.pathname === paths.userChapterList;
  const isNewChapter = location.pathname === paths.newChapter;
  const isEditChapter = location.pathname.startsWith(
    paths.editChapter.split(':')[0]
  );

  const isEditUser = location.pathname === paths.me;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: easeInOut, duration: 1 }}
      exit={{ opacity: 0 }}
    >
      {isChapterList && <AdminChapterList />}
      {isEditChapter && <AdminChapterEdit />}
      {isNewChapter && <AdminChapterNew />}
      {isEditUser && <AdminData />}
    </motion.div>
  );
};

export default AdminPage;
