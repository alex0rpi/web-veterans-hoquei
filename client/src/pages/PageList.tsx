import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { paths } from '../constants/paths';
import { easeInOut, motion } from 'framer-motion';
import { Navigation } from '../components/navigation/Navigation';
import {
  HomePage,
  AuthPage,
  SeasonPage,
  AdminPage,
  BookPage,
  PlayersPage,
  BlogPage,
} from './index';

const PageList = () => {
  const homeRef = useRef<HTMLDivElement | null>(null);
  const associationRef = useRef<HTMLDivElement | null>(null);
  const boardRef = useRef<HTMLDivElement | null>(null);
  const bookRef = useRef<HTMLDivElement | null>(null);
  const seasonsRef = useRef<HTMLDivElement | null>(null);
  const locationRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
    paths.editChapter,
    paths.me,
  ];
  const isAdminPage = adminPaths.includes(location.pathname);

  return (
    <div className='twoColLayout'>
      <Navigation
        homeRef={homeRef}
        associationRef={associationRef}
        seasonsRef={seasonsRef}
        boardRef={boardRef}
        bookRef={bookRef}
        locationRef={locationRef}
        contactRef={contactRef}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: easeInOut, duration: 1 }}
        exit={{ opacity: 0 }}
        className='pageLayout'
      >
        <>
          {location.pathname === paths.home && (
            <HomePage
              scrollUp={scrollUp}
              homeRef={homeRef}
              associationRef={associationRef}
              boardRef={boardRef}
              bookRef={bookRef}
              seasonsRef={seasonsRef}
              locationRef={locationRef}
              contactRef={contactRef}
            />
          )}
          {isAuthPage && <AuthPage />}
          {location.pathname.startsWith(paths.season.split(':')[0]) && (
            <SeasonPage />
          )}
          {isAdminPage && <AdminPage />}
          {location.pathname === paths.book && <BookPage />}
          {location.pathname === paths.players && <PlayersPage />}
          {location.pathname === paths.blog && <BlogPage />}
        </>
      </motion.div>
    </div>
  );
};

export default PageList;
