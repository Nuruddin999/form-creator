import React, { FC, useEffect } from 'react';
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar";
import { Layout } from "antd";
import './App.css';
import { useActions } from "./hooks/useActions";
import { IUser } from "./models/IUser";

const App: FC = () => {
  const { setIsAuth } = useActions();

  useEffect(() => {
    if (localStorage.getItem('access_token')) {
      setIsAuth(true);
    }
  }, [])

  return (
    <div>
      <Navbar />
      <AppRouter />
    </div>
  );
};

export default App;
