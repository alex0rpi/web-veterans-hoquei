import { PropsWithChildren } from 'react';

export const MainLayout = (props: PropsWithChildren) => {
  return <div className="grid md:grid-cols-6 h-screen">{props.children}</div>;
};
