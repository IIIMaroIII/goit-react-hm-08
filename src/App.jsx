import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Layout from './components/Layout/Layout';
import Main from './components/Main/Main';
import { refreshCurrentUser } from './redux/auth/operations';

const HomePage = lazy(() => import('./pages/HomePage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage'));
const RegistrationPage = lazy(() => import('./pages/RegistrationPage'));

import './App.css';
import PrivateRoute from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';
import { selectRefreshing } from './redux/auth/selectors';
import toast from 'react-hot-toast';

function App() {
  const isUserRefreshing = useSelector(selectRefreshing);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshCurrentUser());
  }, [dispatch]);

  return isUserRefreshing ? (
    <b>Refreshing...</b>
  ) : (
    <>
      <Layout>
        <Main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/contacts"
              element={
                <PrivateRoute redirectTo="/login">
                  <ContactsPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/register"
              element={
                <RestrictedRoute redirectTo="/contacts">
                  <RegistrationPage />
                </RestrictedRoute>
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute redirectTo="/contacts">
                  <LoginPage />
                </RestrictedRoute>
              }
            />
          </Routes>
        </Main>
      </Layout>
    </>
  );
}

export default App;

// Request failed with status code 400 - user exist
