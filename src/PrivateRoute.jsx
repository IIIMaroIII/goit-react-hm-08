import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import { selectUserIsLoggedIn } from 'src/redux/auth/selectors';

const PrivateRoute = ({ children, redirectTo = '/' }) => {
  const isUserLoggedIn = useSelector(selectUserIsLoggedIn);

  return <>{isUserLoggedIn ? children : <Navigate to={redirectTo} />}</>;
};

export default PrivateRoute;
