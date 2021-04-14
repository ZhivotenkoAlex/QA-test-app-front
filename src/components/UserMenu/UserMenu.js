import React from 'react';
import { Avatar } from '@material-ui/core';
import s from './UserMenu.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getUserEmail } from '../../redux/authorization/authorization-selectors';
import Logo from '../Logo/Logo';
import Burger from '../Burger/Burger';
import { logOut } from '../../redux/authorization/authorization-operations';
import sprite from '../../img/sprite.svg';

export default function UserMenu() {
  const dispatch = useDispatch();
  const userEmail = useSelector(getUserEmail);

  const userName = userEmail?.split('@')[0];
  const nameInAvatar = userName?.[0].toUpperCase();

  const styles = {
    nav: {
      display: 'none',
    },
  };

  return (
    <>
      <div className={s.container}>
        <Logo />

        <Avatar className={s.MuiAvatar}>{nameInAvatar}</Avatar>
        <Burger />
        <p className={s.name}>{userName}</p>

        <button onClick={() => dispatch(logOut())} className={s.button}>
          <svg className={s.iconExit}>
            <use href={sprite + '#exit'} />
          </svg>
        </button>
      </div>
    </>
  );
}
