import { useLocation } from 'react-router-dom';
import { paths } from '../../constants';
import { NavItem } from './index';
import { faHouse, faPersonSkating, faCalendar, faUser } from '@fortawesome/free-solid-svg-icons';

const PageNavList = () => {
  const location = useLocation();
  const isHome = location.pathname === paths.home;
  const isBook = location.pathname === paths.book;
  const isSeason = location.pathname.startsWith(paths.season.split(':')[0]);
  const authPaths = [
    paths.login,
    paths.register,
    paths.verify,
    paths.requestPasswordReset,
    paths.updatePassword,
  ];
  const isAuth = authPaths.includes(location.pathname);

  return (
    <>
      <NavItem
        icon={faHouse}
        title='Inici'
        highlight={isHome}
        to={!isHome ? paths.home : undefined}
      />

      <NavItem icon={faPersonSkating} title='Veure llibre' to={paths.book} highlight={isBook} />
      <NavItem
        icon={faCalendar}
        title='Temporades recents'
        to={paths.genericSeason}
        highlight={isSeason}
      />
      <NavItem icon={faUser} title='Accés' to={paths.login} highlight={isAuth} />

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
