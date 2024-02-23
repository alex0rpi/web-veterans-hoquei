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
  associationRef?: React.RefObject<HTMLDivElement>;
  seasonsRef?: React.RefObject<HTMLDivElement>;
  contactRef?: React.RefObject<HTMLDivElement>;
  locationRef?: React.RefObject<HTMLDivElement>;
  boardRef?: React.RefObject<HTMLDivElement>;
  bookRef?: React.RefObject<HTMLDivElement>;
};

const MainNavList = ({
  associationRef,
  seasonsRef,
  contactRef,
  locationRef,
  boardRef,
  bookRef,
}: TMainNav) => {
  const location = useLocation();

  return (
    <>
      <NavItem icon={faHouse} title='Home' />
      <NavItem icon={faUser} title='Accés' to={paths.login} />
      {location.pathname === paths.home && (
        <>
          <NavItem
            icon={faPeopleGroup}
            title='Qui som'
            scrollRef={associationRef}
          />
          <NavItem
            icon={faBookOpen}
            title='El Llibre'
            // to={paths.book}
            scrollRef={bookRef}
          />
          <NavItem icon={faPeopleGroup} title='Junta' scrollRef={boardRef} />
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
    </>
  );
};

export default MainNavList;
