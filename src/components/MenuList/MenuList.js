import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import s from '../UserMenu/UserMenu.module.css';
import styled from 'styled-components';
import { logOut } from '../../redux/authorization/authorization-operations';
import sprite from '../../img/sprite.svg';

const NAV = styled.nav`
  @media (max-width: 767px) {
    transform: ${({ showMenu }) =>
      showMenu ? 'translateY(1%)' : 'translateY(0)'};
  }
  opacity: ${({ showMenu }) => (showMenu ? '1' : '0')};
  @media (min-width: 768px) {
    opacity: 1;
  }
`;

export default function UserMenu({ showMenu }) {
  const dispatch = useDispatch();
  return (
    <>
      <NAV className={s.navigation} showMenu={showMenu}>
        <NavLink
          exact
          to="/"
          className={`${s.link} ${s.current}`}
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
        <button onClick={() => dispatch(logOut())} className={s.button}>
          <svg className={s.iconExit}>
            <use href={sprite + '#exit'} />
          </svg>
        </button>
      </NAV>
    </>
  );
}
