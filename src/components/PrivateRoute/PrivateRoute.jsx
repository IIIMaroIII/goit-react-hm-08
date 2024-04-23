// import { useSelector } from 'react-redux';
// import { Navigate, Outlet } from 'react-router-dom';
// import { selectUserIsLoggedIn } from 'src/redux/auth/selectors';

// const PrivateRoute = () => {
//   const isUserLoggedIn = useSelector(selectUserIsLoggedIn);

//   return isUserLoggedIn ? <Outlet /> : <Navigate to="/login" />;
// };
// export default PrivateRoute;

/* -------------------------------------------------------------------------- */
/*          И так тоже пробовал  - этот вариант вообще не работает                       */
/* -------------------------------------------------------------------------- */

import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import ContactsPage from 'src/pages/ContactsPage';
import { selectUserIsLoggedIn } from 'src/redux/auth/selectors';

// const PrivateRoute = ({ children }) => {
//   const isUserLoggedIn = useSelector(selectUserIsLoggedIn);
//   const location = useLocation();

//   useEffect(() => {
//     if (isUserLoggedIn) {
//       <Navigate to="/login" state={location} />;
//     }
//   }, [isUserLoggedIn, location]);

//   if (!isUserLoggedIn) <Navigate to="/login" state={location} />;

//   return children;
// };

// export default PrivateRoute;

/* -------------------------------------------------------------------------- */
/*            Вот так только работает. Скажите это вариант можно применять?
/* -------------------------------------------------------------------------- */
const PrivateRoute = ({ children, redirectTo }) => {
  const isUserLoggedIn = useSelector(selectUserIsLoggedIn);
  const location = useLocation();
  const fromPage = location.state || '/';
  console.log('location', location);
  console.log(isUserLoggedIn);

  return (
    <>
      {isUserLoggedIn ? (
        children
      ) : (
        <Navigate to={redirectTo} state={fromPage} />
      )}
    </>
  );
};

export default PrivateRoute;
