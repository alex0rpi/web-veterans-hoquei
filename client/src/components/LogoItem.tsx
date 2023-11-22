import React from 'react';
import logoImage from '../assets/logos/logo-no-text-removebg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';

export const LogoItem = () => {
  return (
    <div className="flex justify-between items-center border-gray-300 border-b-2">
      <a href="/" className="px-8 py-1 md:py-2">
        <img src={logoImage} className="md:h-24 h-14 brightness-125" alt="logo" />
      </a>
      <FontAwesomeIcon
        icon={faBars}
        size="xl"
        className="px-8 cursor-pointer md:hidden"
        id="burger"
      />
    </div>
  );
};
