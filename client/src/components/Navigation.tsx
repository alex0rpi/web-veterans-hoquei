import { MenuItem } from "./utils/MenuItem";
import { LogoItem } from "./utils/LogoItem";

//* Menu items will change whether the user is logged in or not

export const Navigation = () => {
  return (
    <div className="md:col-span-1 md:col-start-2 md:flex md:justify-end">
      <nav className="w-full min-w-fit bg-sky-950 text-right text-slate-200">
        <LogoItem />
        <div
          className="mt-6  hidden w-full pe-2 ps-5 text-sm md:block"
          id="menu"
        >
          <MenuItem title="Home" />
          <MenuItem title="Accés" to="/admin/login" />
          <MenuItem title="El Llibre" />
          <MenuItem title="Junta" />
          <MenuItem title="Temporades" />
          <MenuItem title="Info jugadors" />
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
