import React from 'react';

type Props = { title: string };

export const Button = (props: Props) => {
  return (
    <div className="pb-4 md:flex justify-center hidden md:dysplay-block md:justify-end gap-4">
      <a
        href="/admin"
        className="btn text-sky-950 border-sky-950 md:border-2 hover:bg-sky-950 hover:text-white transition ease-out duration-500"
      >
        {props.title}
      </a>
    </div>
  );
};
