import React, { useState } from 'react';
import MenuList from '../MenuList/MenuList';
import s from '../Menu/Menu.module.css';
import sprite from '../../img/sprite.svg';
import { Avatar } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { getUserEmail } from '../../redux/authorization/authorization-selectors';

export default function Menu() {
  const [showMenu, setshowMenu] = useState(false);
  const userEmail = useSelector(getUserEmail);
  const userName = userEmail?.split('@')[0];
  const nameInAvatar = userName?.[0].toUpperCase();

  return (
    <>
      <div className={`${s.avatar} ${s.mobile}`}>{nameInAvatar}</div>
      <MenuList setShowM={setshowMenu} showMenu={showMenu} />

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
