import React from 'react';
import { useLocation } from 'react-router-dom';
import { paths } from '../../constants';
import { NavItem } from './index';
import { faHouse, faPersonSkating, faCalendar } from '@fortawesome/free-solid-svg-icons';

type TPageNav = {
  homeRef?: React.RefObject<HTMLDivElement>;
};
const PageNavList = ({ homeRef }: TPageNav) => {
  const location = useLocation();
  const isHome = location.pathname === paths.home;
  const isBook = location.pathname === paths.book;
  // const isPlayers = location.pathname === paths.players;
  const isSeason = location.pathname.startsWith(paths.season.split(':')[0]);

  return (
    <>
      {isHome ? (
        <NavItem icon={faHouse} title='Inici' scrollRef={homeRef} highlight={isHome} />
      ) : (
        <NavItem icon={faHouse} title='Inici' to={paths.home} highlight={isHome} />
      )}

      <NavItem
        icon={faPersonSkating}
        title='Veure llibre'
        to={paths.book}
        highlight={isBook}
      />
      <NavItem
        icon={faCalendar}
        title='Temporades recents'
        to={paths.season}
        highlight={isSeason}
      />

      {/*       <NavItem
        icon={faPersonSkating}
        title='Jugadors'
        to={paths.players}
        highlight={isPlayers}
      /> */}
    </>
  );
};

export default PageNavList;
