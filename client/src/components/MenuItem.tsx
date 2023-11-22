import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  title: string;
};

export const MenuItem = (props: Props) => {
  return (
    <Link
      to="/"
      className="py-1 px-4 flex justify-end text-base hover:bg-white hover:text-sky-950 transition ease-out duration-500"
    >
      <span>{props.title}</span>
    </Link>
  );
};
