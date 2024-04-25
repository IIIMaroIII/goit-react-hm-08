import React from 'react';
import css from './navigation.module.css';
import { NavLink } from 'react-router-dom';
import CustomNavLink from '../reusable/CustomNavLink/CustomNavLink';

const Navigation = () => {
  return (
    <nav className={css.wrapper}>
      <CustomNavLink to="/">Home</CustomNavLink>
      <CustomNavLink to="/contacts">Contacts</CustomNavLink>
    </nav>
  );
};

export default Navigation;
