import React from 'react';
import { useLocation } from 'react-router-dom';
import { paths } from '../../constants';
import { NavItem } from './NavItem';
import {
  faHouse,
  faUser,
  faPersonSkating,
  faNewspaper,
  faCalendar,
} from '@fortawesome/free-solid-svg-icons';

type TPageNav = {
  homeRef?: React.RefObject<HTMLDivElement>;
};
const PageNavList = ({ homeRef }: TPageNav) => {
  const location = useLocation();
  const authPaths = [
    paths.login,
    paths.register,
    paths.verify,
    paths.requestPasswordReset,
    paths.updatePassword,
  ];
  const isHome = location.pathname === paths.home;
  const isAuth = authPaths.includes(location.pathname);
  const isBook = location.pathname === paths.book;
  const isPlayers = location.pathname === paths.players;
  const isBlog = location.pathname === paths.blog;
  const isSeason = location.pathname.startsWith(paths.season.split(':')[0]);
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
      <NavItem
        icon={faUser}
        title='Accés'
        to={paths.login}
        highlight={isAuth}
      />
      {isSeason && (
        <NavItem
          icon={faPersonSkating}
          title='Veure llibre'
          to={paths.book}
          highlight={isBook}
        />
      )}
      {location.pathname === paths.book && (
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
      )}
      <NavItem
        icon={faPersonSkating}
        title='Jugadors'
        to={paths.players}
        highlight={isPlayers}
      />
      <NavItem
        icon={faNewspaper}
        title='Blog i cotis'
        to={paths.blog}
        highlight={isBlog}
      />
    </>
  );
};

export default PageNavList;
