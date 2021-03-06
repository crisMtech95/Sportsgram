import './Navigation.css';
import React, { useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import { getSearchThunk } from '../../store/search'

function Navigation({ isLoaded }){
  const history = useHistory()
  const [searchStr, setSearchStr] = useState("")
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch()


  useEffect(() => {
    if (searchStr.length) {
      dispatch(getSearchThunk({content: searchStr}))
    }
  }, [searchStr])


  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (<ProfileButton user={sessionUser} />);
  } else {
    sessionLinks = (
      <div className="navbar__userbtns">
        <NavLink to="/demo" id="navbar__demo">Demo</NavLink>
        <NavLink to="/login" id="navbar__login">Log In</NavLink>
        <NavLink to="/signup" id="navbar__signup">Sign Up</NavLink>
      </div>
    );
  }

  return (
    <div className="mainContainer__navbar">
          <div className="navbar__homepage">
          <NavLink
            to="/"
            className="navbar__uploadDiv"
            onClick={() => setSearchStr("")}
            ><div className="navbar__homeIcon"></div></NavLink>
          </div>
          <div className="navbar__search">
            <input
              type="text"
              placeholder="Photos,athletes,people"
              onClick={() => {history.push("/search")}}
              value={searchStr}
              onChange={(e) => setSearchStr(e.target.value)}
              />
          </div>
          <div className="navbar__userIcon">
            <NavLink to="/addPhoto" className="navbar__uploadDiv"><div className="navbar__uploadIcon"></div></NavLink>
            {isLoaded && sessionLinks}
          </div>
    </div>
  );
}

export default Navigation;
