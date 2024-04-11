import { Navigate, Route, HashRouter as Router, Routes } from 'react-router-dom';
import App from './App';
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import LocationPopup from './components/LocationPopup/LocationPopup';
import AuthForm from './components/AuthForm/AuthForm';
import ChallengePopup from './components/ChallengePopup/ChallengePopup';
import Logout from './components/Logout/Logout';
import MainInterface from './components/MainInterface/MainInterface';
import SideBar from './components/SideBar/SideBar';

export const Routing: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Navigate to="/team" />} />

      <Route element={
        <Provider store={store}>
          <App />
        </Provider>
      }>
        <Route path="team" element={<MainInterface />}>
          <Route path='connect-location' element={<LocationPopup />} />
          <Route path="start-challenge" element={<ChallengePopup />} />
        </Route>

        <Route path='menu' element={<SideBar visible />} />
        <Route path="logout" element={<Logout />} />
      </Route>

      <Route path='auth' element={
        <Provider store={store}>
          <AuthForm />
        </Provider>} />
    </Routes>
  </Router>
);
