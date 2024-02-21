import { MenuItem } from './MenuItem';
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
  faAddressCard,
  faCirclePlus,
  faArrowRightFromBracket,
  faEnvelope,
  faCalendar,
} from '@fortawesome/free-solid-svg-icons';

type TMainNav = {
  mode?: 'admin' | 'main';
  onLogout: () => void;
};

const NavList = ({ mode = 'main', onLogout }: TMainNav) => {
  return mode === 'admin' ? (
    <>
      <MenuItem icon={faHouse} title='Home' />
      <MenuItem
        icon={faCalendar}
        title='Els meus capítols'
        to={paths.userChapterList}
      />
      <MenuItem
        icon={faCirclePlus}
        title='Crear capítol'
        to={paths.newChapter}
      />
      <MenuItem icon={faAddressCard} title='Les meves dades' to={paths.me} />
      <MenuItem icon={faBookOpen} title='El Llibre' to={paths.book} />
      <MenuItem icon={faPeopleGroup} title='Junta' />
      <MenuItem icon={faCalendar} title='Temporades' to={paths.genericSeason} />
      <MenuItem icon={faPersonSkating} title='Jugadors' to={paths.players} />
      <MenuItem icon={faNewspaper} title='Blog i cotis' to={paths.blog} />
      <MenuItem icon={faLink} title='Enllaços' />
      <MenuItem icon={faLocationDot} title='On som' />
      <MenuItem icon={faEnvelope} title='Contacte' />
      <MenuItem
        icon={faArrowRightFromBracket}
        title='Desconnectar'
        onItemClick={onLogout}
      />
    </>
  ) : (
    <>
      <MenuItem icon={faHouse} title='Home' />
      <MenuItem icon={faUser} title='Accés' to={paths.login} />
      <MenuItem icon={faBookOpen} title='El Llibre' to={paths.book} />
      <MenuItem icon={faPeopleGroup} title='Junta' />
      <MenuItem icon={faCalendar} title='Temporades' to={paths.genericSeason} />
      <MenuItem icon={faPersonSkating} title='Jugadors' to={paths.players} />
      <MenuItem icon={faNewspaper} title='Blog i cotis' to={paths.blog} />
      <MenuItem icon={faLink} title='Enllaços' />
      <MenuItem icon={faLocationDot} title='On som' />
      <MenuItem icon={faEnvelope} title='Contacte' />
    </>
  );
};

export default NavList;
