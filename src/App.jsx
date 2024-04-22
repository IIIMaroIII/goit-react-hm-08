import { lazy, useEffect } from 'react';
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Layout from './components/Layout/Layout';
import Main from './components/Main/Main';
import { refreshCurrentUser } from './redux/auth/operations';

const HomePage = lazy(() => import('./pages/HomePage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage'));
const RegistrationPage = lazy(() => import('./pages/RegistrationPage'));

import './App.css';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { selectUserToken } from './redux/auth/selectors';

function App() {
  /* -------------------------------------------------------------------------- */
  /*При refreshCurrentUser, когда находишся на /contacts залогиненным, все равно перекидывает на /login                          */
  /* -------------------------------------------------------------------------- */

  // const isToken = useSelector(selectUserToken);
  // const location = useLocation();
  // console.log('location from APP.jsx', location);
  // const fromPage = location.state || '/';
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Layout>
        <Main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            --------------------------------------------------------------------------
            */ /* Вот здесь пытаюсь сделать */ /*
            --------------------------------------------------------------------------
            {/* <Route path="/contacts" element={<PrivateRoute />}>
              <Route path="/contacts" element={<ContactsPage />} />
            </Route> */}
            --------------------------------------------------------------------------
            */ /* Вот здесь пытаюсь сделать */ /*
            --------------------------------------------------------------------------
            {/* <Route
              path="/contacts"
              element={
                <PrivateRoute>
                  <ContactsPage />
                </PrivateRoute>
              }
            /> */}
            --------------------------------------------------------------------------
            */ /* Вот здесь пытаюсь сделать */ /*
            --------------------------------------------------------------------------
            {/* <Route path="/contacts" element={<ContactsPage />} /> */}
            {/*  */}
            {/* Вот только так работает, этот вариант можно применять? */}
            <Route
              path="/contacts"
              element={
                <PrivateRoute>
                  <ContactsPage />
                </PrivateRoute>
              }
            />
            {/* Вот только так работает, этот вариант можно применять? */}
            {/*  */}
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </Main>
      </Layout>
    </>
  );
}

export default App;
