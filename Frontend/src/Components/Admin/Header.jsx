import React from 'react';
import { IoNotifications, IoLogOutOutline } from "react-icons/io5";
import '../../App.css'

function Header({ onLogout }) { // Pass down the logout function

  const handleLogout = () => {
    if (onLogout) { // Check if logout function is provided
      onLogout(); // Call the logout function if available
    } else {
      console.error('Logout function not provided'); // Handle missing function
    }
  };

  return (
    <header className='header'>
      <div className='header-right'>
        <IoNotifications className='icon' />
        <button className='logout-button' onClick={handleLogout}>
          <IoLogOutOutline className='icon' />
          Log Out
        </button>
      </div>
    </header>
  );
}

export default Header;
