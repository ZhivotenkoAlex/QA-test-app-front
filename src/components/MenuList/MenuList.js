import React from 'react';
import { useSelector } from 'react-redux';
import { getUserEmail } from '../../redux/authorization/authorization-selectors';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import s from '../MenuList/MenuList.module.css';
import styled from 'styled-components';
import { logOut } from '../../redux/authorization/authorization-operations';
import sprite from '../../img/sprite.svg';

const NAV = styled.nav`
  @media (max-width: 767px) {
  }
  opacity: ${({ showMenu }) => (showMenu ? '1' : '0')};
  display: ${({ showMenu }) => (showMenu ? 'block' : 'none')};
  @media (min-width: 768px) {
    opacity: 1;
    display: flex;
  }
`;

export default function UserMenu({ showMenu, setShowM }) {
  const dispatch = useDispatch();
  const userEmail = useSelector(getUserEmail);
  const userName = userEmail?.split('@')[0];
  const nameInAvatar = userName?.[0].toUpperCase();

  //забрати скрол якщо відкрите мобільне меню
  document.body.classList = showMenu ? s.noscroll : s.scroll;

  const clickMenuLink = e => {
    setShowM(!showMenu);
  };

  return (
    <>
      <NAV className={s.navigation} showMenu={showMenu}>
        <NavLink
          exact
          to="/"
          className={s.link}
          activeClassName={`${s.activeLink} ${s.current}`}
          onClick={clickMenuLink}
        >
          Home
        </NavLink>
        <NavLink
          exact
          to="/useful-info"
          className={s.link}
          activeClassName={`${s.activeLink} ${s.current}`}
          onClick={clickMenuLink}
        >
          Materials
        </NavLink>
        <NavLink
          exact
          to="/contacts"
          className={s.link}
          activeClassName={`${s.activeLink} ${s.current}`}
          onClick={clickMenuLink}
        >
          Contacts
        </NavLink>
        <div className={s.avatar}>{nameInAvatar}</div>
        <p className={s.name}>{userName}</p>
        <NavLink
          to="/"
          onClick={() => dispatch(logOut())}
          className={`${s.link} ${s.exit}`}
        >
          <svg className={s.iconExit}>
            <use href={sprite + '#exit'} />
          </svg>
        </NavLink>
      </NAV>
    </>
  );
}
