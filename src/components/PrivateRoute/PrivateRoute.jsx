import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectUserIsLoggedIn } from 'src/redux/auth/selectors';

const PrivateRoute = () => {
  const isUserLoggedIn = useSelector(selectUserIsLoggedIn);

  return isUserLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};
export default PrivateRoute;
