import React from 'react';
import { Link } from 'react-router-dom';

// destructuring current user and logout from container
export default ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div>
      <h1>Hello, {currentUser.username}</h1>
      <button onClick={logout}>Log Out</button>
    </div>
  ) : (
    <div>
      <Link className="btn" to="/signup">Sign Up</Link>
      <Link className="btn" to="/login">Log In</Link>
    </div>
  );

  return (
    <header className="nav-bar">
      <h1 className="logo">BLUEBIRD</h1>
      <div>
        {display}
      </div>
    </header>
  );
};
