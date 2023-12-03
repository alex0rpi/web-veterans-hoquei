import { Navigation } from "../components/navigation/Navigation";
// import { Outlet } from "react-router-dom";
import { PropsWithChildren } from "react";

export const MainLayout = (props: PropsWithChildren) => {
  return (
    <div className="main-grid bg-hero-pattern bg-cover">
      <Navigation />
      <div className="main-column-layout">
        {/* <Outlet /> */}
        {props.children}
      </div>
      {/* Outlet is a special component that will render the child route’s component */}
    </div>
  );
};
