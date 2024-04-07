import React from 'react';
import { useLocation } from 'react-router-dom';
import { paths } from '../../constants';
import { NavItem } from './NavItem';
import {
  faHouse,
  faUser,
  faPersonSkating,
  // faNewspaper,
  faCalendar,
} from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

type TPageNav = {
  homeRef?: React.RefObject<HTMLDivElement>;
};
const PageNavList = ({ homeRef }: TPageNav) => {
  const { user } = useContext(UserContext);
  const location = useLocation();
  /*   const authPaths = [
    paths.login,
    paths.register,
    paths.verify,
    paths.requestPasswordReset,
    paths.updatePassword,
  ]; */
  const isHome = location.pathname === paths.home;
  // const isAuth = authPaths.includes(location.pathname);
  const isBook = location.pathname === paths.book;
  // const isPlayers = location.pathname === paths.players;
  // const isBlog = location.pathname === paths.blog;
  // const isSeason = location.pathname.startsWith(paths.season.split(':')[0]);
  const adminPaths = [
    paths.me,
    paths.newChapter,
    paths.userChapterList,
    paths.editChapter,
  ];
  const isAdmin =
    adminPaths.includes(location.pathname) && user.isAuthenticated !== true;

  return (
    <>
      {isHome ? (
        <NavItem
          icon={faHouse}
          title='Inici'
          scrollRef={homeRef}
          highlight={isHome}
        />
      ) : (
        <NavItem
          icon={faHouse}
          title='Inici'
          to={paths.home}
          highlight={isHome}
        />
      )}
      {!user.isAuthenticated ? (
        /*  <NavItem
          icon={faUser}
          title='Accés'
          to={paths.login}
          highlight={isAuth}
        /> */
        <></>
      ) : (
        <NavItem
          icon={faUser}
          title='El meu espai'
          to={paths.userChapterList}
          highlight={isAdmin}
        />
      )}
      <NavItem
        icon={faPersonSkating}
        title='Veure llibre'
        to={paths.book}
        highlight={isBook}
      />
      {location.pathname === paths.book ? (
        <NavItem
          icon={faCalendar}
          title={
            <>
              <span>Temporades</span>
              <br />
              <span>recents</span>
            </>
          }
          to={paths.genericSeason}
        />
      ) : (
        <NavItem
          icon={faCalendar}
          title='Temporades recents'
          to={paths.genericSeason}
        />
      )}

      {/*       <NavItem
        icon={faPersonSkating}
        title='Jugadors'
        to={paths.players}
        highlight={isPlayers}
      /> */}
      {/*   <NavItem
        icon={faNewspaper}
        title='Blog i cotis'
        to={paths.blog}
        highlight={isBlog}
      /> */}
    </>
  );
};

export default PageNavList;
