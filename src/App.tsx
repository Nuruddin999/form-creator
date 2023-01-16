import { FC, useEffect } from 'react';
import AppRouter from "./components/AppRouter";
import Navbar from "./components/navbar/Navbar";
import './App.css';
import { useActions } from "./hooks/useActions";


const App: FC = () => {
  const { isLoggedinAction } = useActions();

  useEffect(() => {
    isLoggedinAction()
  }, [])

  return (
    <>
      <Navbar />
      <AppRouter />
    </>
  );
};

export default App;
