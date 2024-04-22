import css from './appBar.module.css';
import Navigation from '../Navigation/Navigation';
import { useSelector } from 'react-redux';
import { selectUserIsLoggedIn } from 'src/redux/auth/selectors';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';

const AppBar = () => {
  const isUserLoggedIn = useSelector(selectUserIsLoggedIn);

  return (
    <header className={css.header}>
      <Navigation />
      {isUserLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
