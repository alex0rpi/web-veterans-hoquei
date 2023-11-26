import { MenuItem } from './utils/MenuItem';
import { LogoItem } from './utils/LogoItem';

//* Menu items will change whether the user is logged in or not

export const Navigation = () => {
  return (
    <div className="md:col-start-2  md:col-span-1 md:flex md:justify-end">
      <nav className="text-right bg-sky-950 text-slate-200 w-full min-w-fit">
        <LogoItem />
        <div className="w-full ps-5 pe-2 text-sm mt-6 hidden md:block" id="menu">
          <MenuItem title="Home" />
          <MenuItem title="Accés" to="/admin/login" />
          <MenuItem title="El Llibre" />
          <MenuItem title="Junta" />
          <MenuItem title="Temporades" />
          <MenuItem title="Blog i notícies" />
          <MenuItem title="Enllaços" />
          <MenuItem title="On som" />
          <MenuItem title="Contacte" />
          {/* <MenuItem title="Els meus epitafis" />
          <MenuItem title="El meus posts" />
          <MenuItem title="Crear epitafi" />
          <MenuItem title="Fer un post" />
          <MenuItem title="Les meves dades" />
          <MenuItem title="Desconnectar" /> */}
        </div>
      </nav>
    </div>
  );
};
