import React from 'react';

type Props = {
  foto: string;
};

export const Card = (props: Props) => {
  return (
    <img
      src={props.foto}
      alt="foto"
      className="card object-cover h-[320px] w-[400px] inline-block m-1"
    />
  );
};
