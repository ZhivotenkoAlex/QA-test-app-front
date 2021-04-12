import React from 'react';
import { Avatar } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import s from '../UserMenu/UserMenu.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getUserEmail } from '../../redux/authorization/authorization-selectors';
import { logOut } from '../../redux/authorization/authorization-operations';
import sprite from '../../img/sprite.svg';

export default function UserMenu() {
  const dispatch = useDispatch();

  const userEmail = useSelector(getUserEmail);
  const userName = userEmail.match(/[\D]+(?=[@])|[\d]+_?[\d]/);

  const nameInAvatar = userName
    .map(us => us[0])
    .join()
    .toUpperCase();

  return (
    <>
      <div className={s.container}>
        <NavLink
          exact
          to="/home"
          className={s.link}
          activeClassName={s.activeLink}
        >
          Home
        </NavLink>
        <NavLink
          exact
          to="/usefull-info"
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
        <Avatar>{nameInAvatar}</Avatar>
        <p className={s.name}>{userName}</p>
      </div>

      <button onClick={() => dispatch(logOut())} className={s.button}>
        <svg className={s.iconExit}>
          <use href={sprite + '#exit'} />
        </svg>
      </button>
    </>
  );
}
