import css from './userMenu.module.css';
import Button from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'src/redux/auth/selectors';
import { logout } from 'src/redux/auth/operations';
import toast from 'react-hot-toast';
import { clearState } from 'src/redux/contacts/slice';
import defaultAvatar from 'src/components/UserMenu/img/default_avatar.jpg';

const UserMenu = () => {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logout())
      .unwrap()
      .then(() => toast.success('You`ve been logged out 😊 See you soon! 😉'))
      .catch(() =>
        toast.error('Oops, something went wrong, please try again!🤨'),
      );
    dispatch(clearState());
  };

  return (
    <div className={css.wrapper}>
      <div className={css.userWrapper}>
        <img className={css.userImg} src={defaultAvatar} alt="default avatar" />
        <p className={css.userText}>Welcome, {user.name}!</p>
      </div>

      <Button onClick={handleLogout}>Log out</Button>
    </div>
  );
};

export default UserMenu;
