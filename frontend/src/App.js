import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom'
import LoginFormPage from './components/LoginFormPage';
import * as sessionActions from './store/session'

function App() {
  const dispatch = useDispatch()
  const [ isLoaded, setIsLoaded] = useState(false)
  useEffect(()=> {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true))
  }, [dispatch])

  return isLoaded && (
    <>
      <h1>Hello from App</h1>
      <Switch>
        <Route path="/login">
          <LoginFormPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
