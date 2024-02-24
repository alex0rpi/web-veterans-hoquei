import { easeInOut, motion } from 'framer-motion';
import {
  AdminChapterList,
  AdminChapterEdit,
  AdminChapterNew,
  AdminData,
} from '../components/Admin';
import { useLocation } from 'react-router-dom';
import { paths } from '../constants';
import { Navigation } from '../components/navigation/Navigation';

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
      <div className='twoColLayout'>
        <Navigation />
        <div className='pageLayout'>
          {isChapterList && <AdminChapterList />}
          {isEditChapter && <AdminChapterEdit />}
          {isNewChapter && <AdminChapterNew />}
          {isEditUser && <AdminData />}
        </div>
      </div>
    </motion.div>
  );
};

export default AdminPage;
