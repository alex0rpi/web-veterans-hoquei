import { MenuItem } from './MenuItem';
import { paths } from '../../constants';

type TMainNav = {
  mode?: 'admin' | 'main';
  onLogout: () => void;
};

const NavList = ({ mode = 'main', onLogout }: TMainNav) => {
  return mode === 'admin' ? (
    <>
      <MenuItem title="Home" />
      <MenuItem title="Els meus capítols" to={paths.userChapterList} />
      <MenuItem title="Crear capítol" to={paths.newChapter} />
      <MenuItem title="Les meves dades" to={paths.me} />
      <MenuItem title="Desconnectar" onItemClick={onLogout} />
    </>
  ) : (
    <>
      <MenuItem title="Home" />
      <MenuItem title="Accés" to={paths.login} />
      <MenuItem title="El Llibre" to={paths.book} />
      <MenuItem title="Junta" />
      <MenuItem title="Temporades" />
      <MenuItem title="Jugadors" />
      <MenuItem title="Blog i notícies" />
      <MenuItem title="Enllaços" />
      <MenuItem title="On som" />
      <MenuItem title="Contacte" />
    </>
  );
};

export default NavList;
