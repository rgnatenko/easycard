import React, { useEffect } from 'react';
import './App.scss';
import { SideBar } from './components/SideBar';
import { Outlet, useNavigate } from 'react-router-dom';
import { useUser } from './redux/selectors';
import { useDataFromStorage } from './helpers/useDataFromStorage';
import { MainInterface } from './components/MainInterface';

const App = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const isAuthorized = useDataFromStorage.getIsAuthorized();

  useEffect(() => {
    if (!user || !isAuthorized) {
      navigate('auth');
    }
  }, [user]);

  return (
    <div className="App">
      <SideBar />

      <Outlet />
    </div>
  );
};

export default App;
