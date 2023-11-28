import { MenuItem } from "./MenuItem";

//* Menu items will change whether the user is logged in or not

const NavList = () => {
  return (
    <div className="mt-6  hidden w-full pe-2 ps-5 text-sm md:block" id="menu">
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
  );
};

export default NavList;
