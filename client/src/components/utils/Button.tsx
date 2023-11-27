import React from 'react';

type Props = { title: string; to: string };

export const Button = (props: Props) => {
  return (
    <a
      href={props.to}
      className="btn text-sky-950 border-sky-950 md:border-2 hover:bg-sky-950 hover:text-white transition ease-out duration-500"
    >
      {props.title}
    </a>
  );
};