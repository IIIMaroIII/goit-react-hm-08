import { lazy, useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Layout from './components/Layout/Layout';
import Main from './components/Main/Main';
import { refreshCurrentUser } from './redux/auth/operations';
import { selectRefreshing } from './redux/auth/selectors';
import Loader from './components/Loader/Loader';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

const HomePage = lazy(() => import('./pages/HomePage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage'));
const RegistrationPage = lazy(() => import('./pages/RegistrationPage'));

import './App.css';

function App() {
  const location = useLocation();
  const fromPage = location.state && '/';
  const isRefreshing = useSelector(selectRefreshing);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshCurrentUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
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
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </Main>
      </Layout>
    </>
  );
}

export default App;
