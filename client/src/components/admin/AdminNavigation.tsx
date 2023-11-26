import { MenuItem } from '../utils/MenuItem';
import { LogoItem } from '../utils/LogoItem';

// Should only be visible once the user is logged in.

export const AdminNavigation = () => {
  return (
    <div className="md:col-start-2  md:col-span-1 md:flex md:justify-end">
      <nav className="text-right bg-sky-950 text-slate-200 w-full min-w-fit">
        <LogoItem />
        {/* Page Navigation Items */}
        <div className="w-full ps-5 pe-2 text-sm mt-6 hidden md:block" id="menu">
          <MenuItem title="Inici" to="/admin/login" />
          <MenuItem title="Els meus epitafis" />
          <MenuItem title="El meus posts" />
          <MenuItem title="Crear epitafi" />
          <MenuItem title="Fer un post" />
          <MenuItem title="Les meves dades" />
          <MenuItem title="Desconnectar" />
        </div>
      </nav>
    </div>
  );
};
