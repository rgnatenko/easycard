import { Navigate, Route, HashRouter as Router, Routes } from 'react-router-dom';
import App from './App';
import React from 'react';
import { MainInterface } from './components/MainInterface';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import { AuthForm } from './components/AuthForm';
import { Logout } from './components/Logout';
import { Popup } from './ui/Popup';
import { LocationPopupInfo } from './ui/LocationPopupInfo';

export const Routing: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Navigate to="/team" />} />

      <Route element={
        <Provider store={store}>
          <App />
        </Provider>
      }>
        <Route path="team">
          <Route index element={<MainInterface />} />
          <Route path='connect-location' element={<Popup>
            <LocationPopupInfo />
          </Popup>} />
        </Route>
        <Route path="logout" element={<Logout />} />
      </Route>

      <Route path='auth' element={
        <Provider store={store}>
          <AuthForm />
        </Provider>} />
    </Routes>
  </Router>
);
