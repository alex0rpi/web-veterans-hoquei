import { easeInOut, motion } from 'framer-motion';
import {
  AdminChapterList,
  AdminChapterEdit,
  AdminChapterNew,
  AdminData,
} from '../components/Admin';
import { useLocation } from 'react-router-dom';
import { paths } from '../constants';

const AdminPage = () => {
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
