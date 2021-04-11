import React from 'react';
import { Avatar } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import s from '../UserMenu/UserMenu.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getUserName } from '../../redux/authorization/authorization-selectors';
import { logOut } from '../../redux/authorization/authorization-operations';
import signOut from './sign-out.svg';

export default function UserMenu() {
  const dispatch = useDispatch();

  // const userName = useSelector(getUserName);
  // const nameInAvatar = userName[0].toUpperCase();

  const nameInAvatar = 'D';
  const userName = 'Dmitri';

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
        <img src={signOut} alt="sign-out" />
      </button>
    </>
  );
}
