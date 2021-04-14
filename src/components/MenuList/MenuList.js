import React from 'react';
import { NavLink } from 'react-router-dom';
import s from '../UserMenu/UserMenu.module.css';
import styled from 'styled-components';

const NAV = styled.nav`
  @media (max-width: 767px) {
    background-color: #f5f6fb;
    position: absolute;
    top: 74px;
    right: 0;
    height: 100vh;
    width: 100vw;
    transform: ${({ showMenu }) =>
      showMenu ? 'translateY(1%)' : 'translateY(0)'};
  }
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 20;
  opacity: ${({ showMenu }) => (showMenu ? '1' : '0')};
  @media (min-width: 768px) {
    opacity: 1;
  }
`;

export default function UserMenu({ showMenu }) {
  return (
    <>
      <NAV className={s.navigation} showMenu={showMenu}>
        <NavLink exact to="/" className={s.link} activeClassName={s.activeLink}>
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
      </NAV>
    </>
  );
}
