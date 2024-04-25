import React from 'react';
import css from './main.module.css';
import { useSelector } from 'react-redux';
import { selectUserToken } from 'src/redux/auth/selectors';
import clsx from 'clsx';
import Container from '../Container/Container';

const Main = ({ children }) => {
  const token = useSelector(selectUserToken);
  const classes = clsx(css.main, {
    [css.locked]: !token,
    [css.unlocked]: token,
  });
  return (
    <main className={classes}>
      <Container>{children}</Container>
    </main>
  );
};

export default Main;
