import { Suspense } from 'react';
import css from './layout.module.css';
import AppBar from '../AppBar/AppBar';
import Loader from '../Loader/Loader';
import { Toaster } from 'react-hot-toast';

const Layout = ({ children }) => {
  return (
    <>
      <Toaster />
      <AppBar />
      <Suspense fallback={<Loader />}>{children}</Suspense>
    </>
  );
};

export default Layout;
