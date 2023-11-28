import { LogoItem } from "../components/utils/LogoItem";
import NavList from "./NavList";

//* Menu items will change whether the user is logged in or not

export const Navigation = () => {
  return (
    <div className="md:col-span-1 md:col-start-2 md:flex md:justify-end">
      <nav className="w-full min-w-fit bg-sky-950 text-right text-slate-200">
        <LogoItem />
        <NavList />
      </nav>
    </div>
  );
};
