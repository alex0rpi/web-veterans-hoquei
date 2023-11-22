import { MenuItem } from './MenuItem';
import { LogoItem } from './LogoItem';

export const MainNavigation = () => {
  return (
    <div className="md:col-start-2  md:col-span-1 md:flex md:justify-end">
      <nav className="text-right bg-sky-950 text-slate-200 w-full min-w-fit">
        <LogoItem />
        {/* Page Navigation Items */}
        <div className="ps-12 text-sm mt-6 hidden md:block" id="menu">
          <MenuItem title="Home" />
          <MenuItem title="Accés membres" />
          <MenuItem title="Junta" />
          <MenuItem title="Temporades" />
          <MenuItem title="Blog i notícies" />
          <MenuItem title="Enllaços" />
          <MenuItem title="On som" />
          <MenuItem title="Contacte" />
        </div>
      </nav>
    </div>
  );
};
