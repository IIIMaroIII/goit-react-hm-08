import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Layout from './components/Layout/Layout';
import Main from './components/Main/Main';
import { refreshCurrentUser } from './redux/auth/operations';

const HomePage = lazy(() => import('./pages/HomePage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage'));
const RegistrationPage = lazy(() => import('./pages/RegistrationPage'));

import './App.css';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
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

            {/* Вот здесь пытаюсь сделать PrivateRoute */}

            {/* <Route path="/contacts" element={<PrivateRoute />}>
              <Route path="/contacts" element={<ContactsPage />} />
            </Route> */}

            {/* Вот здесь пытаюсь сделать PrivateRoute */}
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </Main>
      </Layout>
    </>
  );
}

export default App;
