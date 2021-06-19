import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom'
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from './components/SignupFormPage'
import * as sessionActions from './store/session'
import Navigation from "./components/Navigation";
import HomePage from './components/HomePage'
import MainPage from './components/MainPage'

function App() {
  const dispatch = useDispatch()
  const [ isLoaded, setIsLoaded] = useState(false)
  useEffect(()=> {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true))
  }, [dispatch])


  return isLoaded && (
    <div className="mainContainer">
      <Navigation  isLoaded={isLoaded} />
        {isLoaded && (
        <Switch>
            <Route path="/" exact>
              <MainPage />
            </Route>
            <Route path="/explore" exact>
              <HomePage />
            </Route>
            <Route path="/login">
              <LoginFormPage />
            </Route>
            <Route path="/signup">
              <SignupFormPage />
            </Route>
        </Switch>
        )}
    </div>
  );
}

export default App;
