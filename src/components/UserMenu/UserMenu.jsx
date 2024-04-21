import React, { useState } from 'react';
import css from './userMenu.module.css';
import Button from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, selectUserIsLoggedIn } from 'src/redux/auth/selectors';
import { logout } from 'src/redux/auth/operations';
import { NavLink } from 'react-router-dom';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isUserLoggedIn = useSelector(selectUserIsLoggedIn);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={css.wrapper}>
      <div className={css.userWrapper}>
        <p className={css.userText}>Welcome, {user.name}!🫵🏻</p>
      </div>
      {isUserLoggedIn ? (
        <Button onClick={handleLogout}>Log out</Button>
      ) : (
        <NavLink className={css.login} to="/login">
          Log in
        </NavLink>
      )}
    </div>
  );
};

export default UserMenu;
