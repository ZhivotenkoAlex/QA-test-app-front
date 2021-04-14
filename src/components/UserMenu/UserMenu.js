import React from 'react';
import s from './UserMenu.module.css';
import { useSelector } from 'react-redux';
import { getUserEmail } from '../../redux/authorization/authorization-selectors';
import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';

export default function UserMenu() {
  const userEmail = useSelector(getUserEmail);
  const userName = userEmail?.split('@')[0];

  return (
    <>
      <div className={s.container}>
        <Logo />
        <Menu />
        <p className={s.name}>{userName}</p>
      </div>
    </>
  );
}
