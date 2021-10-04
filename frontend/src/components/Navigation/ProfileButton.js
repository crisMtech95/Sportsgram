
// import { Redirect } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import { Link } from 'react-router-dom'

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <div className="navbar__userInfo">
      <button onClick={openMenu} className="navbar__profileBtn">
        <div className="navbar__profileIcon"></div>
      </button>
      {showMenu && (
        <div className="navbar__userMenuDiv">
          <Link to={`/profile/${user.id}`}>{user.username}</Link>
          {/* <div>{user.email}</div> */}
          <button onClick={logout} className="navbar__logoutBtn">Log Out</button>
        </div>

      )}
    </div>
  );
}

export default ProfileButton;
