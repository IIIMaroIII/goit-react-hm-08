import { Route, Routes } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Main from './components/Main/Main';
import HomePage from './pages/HomePage';

import './App.css';
import ContactsPage from './pages/ContactsPage';
import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <>
      <Layout>
        <Main>
          <Routes>
            <Route path="/" element={<HomePage />} />
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
