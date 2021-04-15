import React from 'react';
import s from './UserMenu.module.css';

import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';

export default function UserMenu() {
  return (
    <>
      <div className={s.container}>
        <Logo />
        <Menu />
      </div>
    </>
  );
}
