import React from 'react';
import css from './authNav.module.css';
import { NavLink } from 'react-router-dom';
import CustomNavLink from '../reusable/CustomNavLink/CustomNavLink';

const AuthNav = () => {
  return (
    <div className={css.wrapper}>
      <CustomNavLink to="/register">Register</CustomNavLink>
      <CustomNavLink to="/login">Login</CustomNavLink>
    </div>
  );
};

export default AuthNav;
