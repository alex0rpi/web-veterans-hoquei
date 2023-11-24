import React from 'react';

type Props = {
  foto: string;
};

export const Card = (props: Props) => {
  return (
    <img
      src={props.foto}
      alt="foto"
      className="object-cover card h-full my-2 w-[300px] inline-block m-2"
    />
  );
};
