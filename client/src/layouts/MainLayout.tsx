import { PropsWithChildren } from 'react';

export const MainLayout = (props: PropsWithChildren) => {
  return (
    <div className="grid md:grid-cols-layoutMd xl:grid-cols-layoutLg h-screen">
      {props.children}
    </div>
  );
};
