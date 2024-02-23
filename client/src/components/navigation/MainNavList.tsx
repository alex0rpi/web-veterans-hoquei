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
  associationRef?: React.RefObject<HTMLDivElement>;
  seasonsRef?: React.RefObject<HTMLDivElement>;
};

const MainNavList = ({ associationRef, seasonsRef }: TMainNav) => {
  return (
    <>
      <NavItem icon={faHouse} title='Home' />
      <NavItem icon={faUser} title='Accés' to={paths.login} />
      <NavItem icon={faBookOpen} title='El Llibre' to={paths.book} />
      <NavItem
        icon={faPeopleGroup}
        title='Qui som'
        scrollRef={associationRef}
      />
      <NavItem icon={faPeopleGroup} title='Junta' />
      <NavItem icon={faCalendar} title='Temporades' scrollRef={seasonsRef} />
      <NavItem icon={faPersonSkating} title='Jugadors' to={paths.players} />
      <NavItem icon={faNewspaper} title='Blog i cotis' to={paths.blog} />
      <NavItem icon={faLink} title='Enllaços' />
      <NavItem icon={faLocationDot} title='On som' />
      <NavItem icon={faEnvelope} title='Contacte' />
    </>
  );
};

export default MainNavList;
