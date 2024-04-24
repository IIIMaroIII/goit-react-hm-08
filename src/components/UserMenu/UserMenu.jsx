import css from './userMenu.module.css';
import Button from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'src/redux/auth/selectors';
import { logout } from 'src/redux/auth/operations';

const UserMenu = () => {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={css.wrapper}>
      <div className={css.userWrapper}>
        <p className={css.userText}>Welcome, {user.name}!🫵🏻</p>
      </div>

      <Button onClick={handleLogout}>Log out</Button>
    </div>
  );
};

export default UserMenu;
