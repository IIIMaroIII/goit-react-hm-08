import React from 'react';
import css from './layout.module.css';
import AppBar from '../AppBar/AppBar';

const Layout = ({ children }) => {
  return (
    <>
      <AppBar />
      <div className={css.wrapper}>{children}</div>
    </>
  );
};

export default Layout;
