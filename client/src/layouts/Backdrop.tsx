import React from 'react';

type Props = {
  show: boolean;
};

const Backdrop = (props: Props) => {
  return <div className="fixed w-full h-full bg-slate-800 z-10"></div>;
};

export default Backdrop;
