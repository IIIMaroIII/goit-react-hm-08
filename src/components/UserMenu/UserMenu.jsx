import React, { useState } from 'react';
import css from './userMenu.module.css';
import Button from '../Button/Button';

const UserMenu = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState();
  return (
    <div className={css.wrapper}>
      <div className={css.userWrapper}>
        <p className={css.userText}>Welcome, User!🫵🏻</p>
      </div>
      <Button>{isUserLoggedIn ? 'Log out' : 'Log in'}</Button>
    </div>
  );
};

export default UserMenu;
