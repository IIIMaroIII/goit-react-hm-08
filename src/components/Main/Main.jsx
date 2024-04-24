import React from 'react';
import css from './main.module.css';
import { useSelector } from 'react-redux';
import { selectUserToken } from 'src/redux/auth/selectors';
import clsx from 'clsx';

const Main = ({ children }) => {
  const token = useSelector(selectUserToken);
  const classes = clsx(css.main, {
    [css.locked]: !token,
    [css.unlocked]: token,
  });
  return <main className={classes}>{children}</main>;
};

export default Main;
