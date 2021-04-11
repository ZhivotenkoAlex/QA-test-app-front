import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './logo.svg';
import s from './Logo.module.css';

export default function Logo() {
  return (
    <>
      <NavLink exact to="/">
        <img src={logo} alt="logo" className={s.logo} />
      </NavLink>
    </>
  );
}
