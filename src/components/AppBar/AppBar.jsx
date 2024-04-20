import React from 'react';
import css from './appBar.module.css';
import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';

const AppBar = () => {
  return (
    <header className={css.header}>
      <Navigation />
      <AuthNav />
      <UserMenu />
    </header>
  );
};

export default AppBar;
