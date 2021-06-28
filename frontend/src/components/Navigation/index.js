import './Navigation.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (<ProfileButton user={sessionUser} />);
  } else {
    sessionLinks = (
      <div className="navbar__userbtns">
        <NavLink to="/login" id="navbar__login">Log In</NavLink>
        <NavLink to="/signup" id="navbar__signup">Sign Up</NavLink>
      </div>
    );
  }

  return (
    <div className="mainContainer__navbar">
          <div className="navbar__homepage">
          <NavLink to="/" className="navbar__uploadDiv"><div className="navbar__homeIcon"></div></NavLink>
          </div>
          <div className="navbar__search">
            <input type="text" placeholder="Photos,athletes,people"/>
          </div>
          <div className="navbar__userIcon">
            <NavLink to="/addPhoto" className="navbar__uploadDiv"><div className="navbar__uploadIcon"></div></NavLink>
            {isLoaded && sessionLinks}
          </div>
    </div>
  );
}

export default Navigation;
