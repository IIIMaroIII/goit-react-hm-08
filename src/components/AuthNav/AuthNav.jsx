import React from 'react';
import css from './authNav.module.css';
import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <div className={css.wrapper}>
      <NavLink className={css.link} to="/register">
        Register
      </NavLink>
      <NavLink className={css.link} to="/login">
        Log in
      </NavLink>
    </div>
  );
};

export default AuthNav;
