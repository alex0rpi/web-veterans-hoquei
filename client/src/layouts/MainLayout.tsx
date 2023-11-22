import { PropsWithChildren } from 'react';

export const MainLayout = (props: PropsWithChildren) => {
  return (
    <div className="grid md:grid-cols-6 h-screen">
      <div className="md:col-span-1"></div>
      {props.children}
      <div className="md:col-span-1"></div>
    </div>
  );
};
