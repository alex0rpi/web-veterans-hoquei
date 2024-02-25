import { NavItem } from './NavItem';
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
import { paths } from '../../constants';
import { useLocation } from 'react-router-dom';

type TMainNav = {
  homeRef?: React.RefObject<HTMLDivElement>;
  associationRef?: React.RefObject<HTMLDivElement>;
  seasonsRef?: React.RefObject<HTMLDivElement>;
  contactRef?: React.RefObject<HTMLDivElement>;
  locationRef?: React.RefObject<HTMLDivElement>;
  boardRef?: React.RefObject<HTMLDivElement>;
  bookRef?: React.RefObject<HTMLDivElement>;
};

const MainNavList = ({
  homeRef,
  associationRef,
  seasonsRef,
  contactRef,
  locationRef,
  boardRef,
  bookRef,
}: TMainNav) => {
  const location = useLocation();

  const isNotLoginRegister =
    location.pathname !== paths.login && location.pathname !== paths.register;

  return (
    <div>
      <NavItem icon={faHouse} title='Home' scrollRef={homeRef} />
      {isNotLoginRegister && (
        <NavItem icon={faUser} title='Accés' to={paths.login} />
      )}
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
          <NavItem icon={faLink} title='Enllaços' />
          <NavItem
            icon={faLocationDot}
            title='On som'
            scrollRef={locationRef}
          />
          <NavItem icon={faEnvelope} title='Contacte' scrollRef={contactRef} />
        </>
      )}
    </div>
  );
};

export default MainNavList;
