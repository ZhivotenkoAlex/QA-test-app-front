import React, { useState } from 'react';
import MenuList from '../MenuList/MenuList';
import s from '../UserMenu/UserMenu.module.css';
import sprite from '../../img/sprite.svg';

export default function UserMenu() {
  const [showMenu, setshowMenu] = useState(false);

  return (
    <>
      <MenuList showMenu={showMenu} />
      <button
        className={s.buttonMobile}
        open={showMenu}
        onClick={() => setshowMenu(!showMenu)}
      >
        {showMenu ? (
          <svg className={s.iconCloseMenu}>
            <use href={sprite + '#cross'} />
          </svg>
        ) : (
          <svg className={s.iconMobileMenu}>
            <use href={sprite + '#menu'} />
          </svg>
        )}
      </button>
    </>
  );
}
