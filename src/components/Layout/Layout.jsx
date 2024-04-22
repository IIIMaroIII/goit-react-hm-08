import React, { Suspense } from 'react';
import css from './layout.module.css';
import AppBar from '../AppBar/AppBar';
import Loader from '../Loader/Loader';

const Layout = ({ children }) => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<Loader />}>{children}</Suspense>
    </>
  );
};

export default Layout;
