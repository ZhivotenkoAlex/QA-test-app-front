import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Logo.module.css';
import sprite from '../../img/sprite.svg';

export default function Logo() {
  return (
    <>
      <NavLink exact to="/">
        <svg className={s.logo}>
          <use href={sprite + '#logo'} />
        </svg>
      </NavLink>
    </>
  );
}
