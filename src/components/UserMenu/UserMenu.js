import React from 'react';
import { Avatar } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import s from '../UserMenu/UserMenu.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getUserEmail } from '../../redux/authorization/authorization-selectors';
import Logo from '../Logo/Logo';
import { logOut } from '../../redux/authorization/authorization-operations';
import sprite from '../../img/sprite.svg';

export default function UserMenu() {
  const dispatch = useDispatch();
  const userEmail = useSelector(getUserEmail);

  const userName = userEmail?.split('@')[0];
  const nameInAvatar = userName?.[0].toUpperCase();

  return (
    <>
      <div className={s.container}>
        <Logo />
        <nav className={s.navigation}>
          <NavLink
            exact
            to="/"
            className={s.link}
            activeClassName={s.activeLink}
          >
            Home
          </NavLink>
          <NavLink
            exact
            to="/useful-info"
            className={s.link}
            activeClassName={s.activeLink}
          >
            Materials
          </NavLink>
          <NavLink
            exact
            to="/contacts"
            className={s.link}
            activeClassName={s.activeLink}
          >
            Contacts
          </NavLink>
        </nav>

        <Avatar className={s.avatart}>{nameInAvatar}</Avatar>
        <p className={s.name}>{userName}</p>

        <button onClick={() => dispatch(logOut())} className={s.button}>
          <svg className={s.iconExit}>
            <use href={sprite + '#exit'} />
          </svg>
        </button>
        <button className={s.buttonMobile}>
          <svg className={s.iconMobileMenu}>
            <use href={sprite + '#menu'} />
          </svg>
        </button>
      </div>
    </>
  );
}
