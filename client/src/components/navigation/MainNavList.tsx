import { useLocation } from 'react-router-dom';
import { NavItem } from './NavItem';
import { paths } from '../../constants';
import {
  faHouse,
  faUser,
  faBookOpen,
  faPeopleGroup,
  faPersonSkating,
  faNewspaper,
  faLink,
  faLocationDot,
  faEnvelope,
  faCalendar,
} from '@fortawesome/free-solid-svg-icons';

type TMainNav = {
  homeRef?: React.RefObject<HTMLDivElement>;
  associationRef?: React.RefObject<HTMLDivElement>;
  boardRef?: React.RefObject<HTMLDivElement>;
  seasonsRef?: React.RefObject<HTMLDivElement>;
  bookRef?: React.RefObject<HTMLDivElement>;
  relatedLinksRef?: React.RefObject<HTMLDivElement>;
  locationRef?: React.RefObject<HTMLDivElement>;
  contactRef?: React.RefObject<HTMLDivElement>;
};

const MainNavList = ({
  homeRef,
  associationRef,
  seasonsRef,
  contactRef,
  locationRef,
  boardRef,
  relatedLinksRef,
  bookRef,
}: TMainNav) => {
  const location = useLocation();

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
      {location.pathname === paths.home ? (
        <NavItem icon={faHouse} title='Inici' scrollRef={homeRef} />
      ) : (
        <NavItem icon={faHouse} title='Inici' to={paths.home} />
      )}

      {isAuth && <NavItem icon={faUser} title='Accés' to={paths.login} />}
      {location.pathname.startsWith(paths.season.split(':')[0]) && (
        <>
          <NavItem icon={faPersonSkating} title='El Llibre' to={paths.book} />
          <NavItem icon={faPersonSkating} title='Jugadors' to={paths.players} />
        </>
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
      {location.pathname === paths.home && (
        <>
          <NavItem icon={faUser} title='Accés' to={paths.login} />
          <NavItem
            icon={faPeopleGroup}
            title='Qui som'
            scrollRef={associationRef}
          />
          <NavItem icon={faPeopleGroup} title='Junta' scrollRef={boardRef} />
          <NavItem
            icon={faBookOpen}
            title='El Llibre'
            // to={paths.book}
            scrollRef={bookRef}
          />
          <NavItem
            icon={faCalendar}
            title='Temporades'
            scrollRef={seasonsRef}
          />
          <NavItem icon={faPersonSkating} title='Jugadors' to={paths.players} />
          <NavItem icon={faNewspaper} title='Blog i cotis' to={paths.blog} />
          <NavItem icon={faLink} title='Enllaços' scrollRef={relatedLinksRef} />
          <NavItem
            icon={faLocationDot}
            title='On som'
            scrollRef={locationRef}
          />
          <NavItem icon={faEnvelope} title='Contacte' scrollRef={contactRef} />
        </>
      )}
    </>
  );
};

export default MainNavList;
