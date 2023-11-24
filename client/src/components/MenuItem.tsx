// import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  title: string;
  // iconItem: FontAwesomeIconProps;
};

export const MenuItem = (props: Props) => {
  return (
    <Link
      to="/"
      className="py-1 pe-1 flex justify-end text-base hover:text-lg hover:bg-white hover:text-sky-950 transition ease-out duration-500"
    >
      <span>{props.title}</span>
      {/*  <FontAwesomeIcon
        icon={iconItem.icon}
        size={iconItem.size}
        className={iconItem.iconClass}
        id={iconItem.id}
      /> */}
    </Link>
  );
};
