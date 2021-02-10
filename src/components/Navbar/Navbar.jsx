import React from 'react';
import a from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={a.nav}>
      <div className={`${a.item} ${a.active}`}>
        <a>Profile</a>
      </div>
      <div className={a.item}>
        <a>Messages</a>
      </div>
      <div className={a.item}>
        <a>News</a>
      </div>
      <div className={a.item}>
        <a>Music</a>
      </div>
      <div className={a.item}>
        <a>Settings</a>
      </div>
    </nav>
  );
};

export default Navbar;
