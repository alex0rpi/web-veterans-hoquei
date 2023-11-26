import { PropsWithChildren } from 'react';
import { Navigation } from '../components';

export const MainLayout = (props: PropsWithChildren) => {
  return (
    <div className="grid md:grid-cols-layoutMd xl:grid-cols-layoutLg h-screen">
      <Navigation />
      {props.children}
    </div>
  );
};
