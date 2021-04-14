import React, { useState } from 'react';
import MenuList from '../MenuList/MenuList';
import s from '../UserMenu/UserMenu.module.css';
import sprite from '../../img/sprite.svg';
import { Avatar } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { getUserEmail } from '../../redux/authorization/authorization-selectors';

export default function Menu() {
  const userEmail = useSelector(getUserEmail);

  const userName = userEmail?.split('@')[0];
  const nameInAvatar = userName?.[0].toUpperCase();
  const [showMenu, setshowMenu] = useState(false);

  return (
    <>
      <MenuList showMenu={showMenu} />
      <div className={s.avatar}>{nameInAvatar}</div>

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
