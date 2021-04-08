import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import s from '../Navigation/Navigation.module.css';
import UserMenu from '../UserMenu/UserMenu';
import Logo from '../Logo/Logo';

import { getIsLoggedIn } from '../../redux/authorization/authorization-selectors';

export default function Navigation() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <section className={s.section}>
      <Logo />
      <nav className={s.navigation}>
        {isLoggedIn ? (
          <UserMenu />
        ) : (
          <>
            <NavLink
              exact
              to="/contacts"
              className={s.link}
              activeClassName={s.activeLink}
            >
              Contacts
            </NavLink>
          </>
        )}
      </nav>
    </section>
  );
}

{
  /* ; */
}
