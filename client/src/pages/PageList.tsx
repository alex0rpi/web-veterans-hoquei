import { useContext, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { paths } from '../constants/paths';
import { easeInOut, motion } from 'framer-motion';
import { Navigation } from '../components/Navigation/Navigation';
import {
  HomePage,
  AuthPage,
  SeasonPage,
  AdminPage,
  BookPage,
  PlayersPage,
  // BlogPage,
} from './index';
import { UserContext } from '../context/UserContext';
import CheckAuthenticatedService from '../services/CheckAuthenticatedService';

const PageList = () => {
  const homeRef = useRef<HTMLDivElement | null>(null);
  const associationRef = useRef<HTMLDivElement | null>(null);
  const boardRef = useRef<HTMLDivElement | null>(null);
  const bookRef = useRef<HTMLDivElement | null>(null);
  const seasonsRef = useRef<HTMLDivElement | null>(null);
  const relatedLinksRef = useRef<HTMLDivElement | null>(null);
  const locationRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();

  const { user, setUser } = useContext(UserContext);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const checkIfUserIsAuth = async () => {
      const user = await CheckAuthenticatedService();
      if (user) {
        setUser({
          id: user.id,
          name: user.name,
          isAuthenticated: true,
        });
        return;
      }
      setUser({ id: '', name: '', isAuthenticated: false });
    };
    if (!user.isAuthenticated) checkIfUserIsAuth();
  }, [setUser]);

  const authPaths = [
    paths.login,
    paths.register,
    paths.verify,
    paths.requestPasswordReset,
    paths.updatePassword,
  ];
  const isAuthPage = authPaths.includes(location.pathname);

  const adminPaths = [
    paths.userChapterList,
    paths.newChapter,
    paths.editChapter.split(':')[0],
    paths.me,
  ];

  const isAdminPage =
    adminPaths.some((path) => location.pathname.startsWith(path)) &&
    user.isAuthenticated === true;
  const isBookPage = location.pathname === paths.book;

  return (
    <div className='centerLayout'>
      <Navigation
        homeRef={homeRef}
        associationRef={associationRef}
        seasonsRef={seasonsRef}
        boardRef={boardRef}
        bookRef={bookRef}
        relatedLinksRef={relatedLinksRef}
        locationRef={locationRef}
        contactRef={contactRef}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: easeInOut, duration: 1 }}
        exit={{ opacity: 0 }}
        className={!isBookPage ? 'pageLayout' : 'bookPageLayout'}
      >
        {location.pathname === paths.home && (
          <HomePage
            homeRef={homeRef}
            scrollUp={scrollUp}
            associationRef={associationRef}
            boardRef={boardRef}
            bookRef={bookRef}
            seasonsRef={seasonsRef}
            relatedLinksRef={relatedLinksRef}
            locationRef={locationRef}
            contactRef={contactRef}
          />
        )}
        {isAuthPage && <AuthPage />}
        {location.pathname.startsWith(paths.season.split(':')[0]) && (
          <SeasonPage />
        )}
        {isAdminPage && <AdminPage />}
        {isBookPage && <BookPage />}
        {location.pathname === paths.players && <PlayersPage />}
        {/* {location.pathname === paths.blog && <BlogPage />} */}
      </motion.div>
    </div>
  );
};

export default PageList;
