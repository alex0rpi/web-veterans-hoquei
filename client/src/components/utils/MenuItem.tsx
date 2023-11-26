// import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  title: string;
  // iconItem: FontAwesomeIconProps;
  to?: string;
};

export const MenuItem = ({ title, to = '/' }: Props) => {
  return (
    <Link
      to={to}
      className="py-1 pe-1 flex justify-end text-base hover:text-lg hover:bg-slate-100 hover:text-sky-950 transition ease-out duration-500"
    >
      <span>{title}</span>
      {/*  <FontAwesomeIcon
        icon={iconItem.icon}
        size={iconItem.size}
        className={iconItem.iconClass}
        id={iconItem.id}
      /> */}
    </Link>
  );
};
