import React, {Suspense} from 'react';
// import logo from './logo.svg';
import Header from './features/header/Header';
import UserProfile from './features/useProfile/UseProfile';
import Auth from './features/auth/Auth';
import { Counter } from './features/counter/Counter';
import { useSelector } from 'react-redux';
import './App.css';

function App() {
  const authState = useSelector((state) => state.auth);
  console.log("auth state", authState);
  return (
    <>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Header/>
        {authState.isAuthenticated ? <UserProfile /> : <Auth />}
        <h1>Redux Counter</h1>
        <Counter />
      </Suspense>
    </>
  );
}

export default App;
