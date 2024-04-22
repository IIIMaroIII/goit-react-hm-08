import css from './userMenu.module.css';
import Button from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'src/redux/auth/selectors';
import { logout } from 'src/redux/auth/operations';
import { useNavigate } from 'react-router-dom';

const UserMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logout())
      .then(() => {
        navigate('/', { replace: true });
        console.log('You`ve been successfully logged out');
      })
      .catch(err => console.log(err));
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
