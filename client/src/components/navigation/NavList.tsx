import { MenuItem } from './MenuItem';

type TMainNav = {
  mode?: 'admin' | 'main';
  onLogout: () => void;
};

const NavList = ({ mode = 'main', onLogout }: TMainNav) => {
  return mode === 'admin' ? (
    <>
      <MenuItem title="Home" />
      <MenuItem title="Els meus capítols" to="/admin/chapter-list" />
      <MenuItem title="Crear capítol" to="/admin/new-chapter" />
      <MenuItem title="El meus posts" />
      <MenuItem title="Nou post" />
      <MenuItem title="Les meves dades" />
      <MenuItem title="Desconnectar" onItemClick={onLogout} />
    </>
  ) : (
    <>
      <MenuItem title="Home" />
      <MenuItem title="Accés" to="/admin/login" />
      <MenuItem title="El Llibre" to="/llibre-veterans-hoquei-patins-fcb" />
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
