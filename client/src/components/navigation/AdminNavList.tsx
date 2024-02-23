import { NavItem } from './NavItem';
import { paths } from '../../constants';
import {
  faHouse,
  faAddressCard,
  faCirclePlus,
  faArrowRightFromBracket,
  faCalendar,
} from '@fortawesome/free-solid-svg-icons';

type TMainNav = {
  onLogout: () => void;
};

const AdminNavList = ({ onLogout }: TMainNav) => {
  return (
    <>
      <NavItem icon={faHouse} title='Home' />
      <NavItem
        icon={faCalendar}
        title='Els meus capítols'
        to={paths.userChapterList}
      />
      <NavItem
        icon={faCirclePlus}
        title='Crear capítol'
        to={paths.newChapter}
      />
      <NavItem icon={faAddressCard} title='Les meves dades' to={paths.me} />
      <NavItem
        icon={faArrowRightFromBracket}
        title='Desconnectar'
        onItemClick={onLogout}
      />
    </>
  );
};

export default AdminNavList;
