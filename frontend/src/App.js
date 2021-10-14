import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom'
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from './components/SignupFormPage'
import * as sessionActions from './store/session'
import Navigation from "./components/Navigation";
import HomePage from './components/HomePage'
import MainPage from './components/MainPage'
import PostForm from './components/PostForm'
import BigSinglePost from './components/BigSinglePost';
import Profile from './components/Profile';
import DemoLogin from './components/DemoLogin'
import Search from './components/Search';

function App() {
  const dispatch = useDispatch()
  const [searchStr, setSearchStr] = useState("")
  const [ isLoaded, setIsLoaded] = useState(false)
  useEffect(()=> {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true))
  }, [dispatch])


  return isLoaded && (
    <div className="mainContainer">
      <Navigation  isLoaded={isLoaded} searchStr={searchStr} setSearchStr={setSearchStr}/>
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
            <Route path="/demo">
              <DemoLogin />
            </Route>
            <Route path="/signup">
              <SignupFormPage />
            </Route>
            <Route path="/addPhoto">
              <PostForm />
            </Route>
            <Route path="/images/:id">
              <BigSinglePost />
            </Route>
            <Route path="/profile/:id">
              <Profile />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
        </Switch>
        )}
    </div>
  );
}

export default App;
