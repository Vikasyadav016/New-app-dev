import React, { useState } from 'react';
import './Topbar.css';
import UserIcon from '../../../IconSvg/UserIcon';

interface TopbarProps {
  data?: Record<string, any>; 
  usertype?: string | number;
  role?: string | number;
}

const Topbar: React.FC<TopbarProps> = ({ data, usertype, role }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  const userName = data?.name || 'John Doe';

  return (
    <header className="topbar">
      <div className="topbar-left">
        <span className="app-logo" aria-label="App Logo" role="img">🏛️</span>
        <span className="app-name">Dashboard</span>
      </div>
      <div className="topbar-right">
        <div className="user-icon" onClick={toggleMenu} role="button" tabIndex={0} aria-haspopup="true" aria-expanded={menuOpen}>
          <UserIcon
           size={40} />
        </div>
        {menuOpen && (
          <div className="user-dropdown" role="menu">
            <p><strong>{userName}</strong></p>
            <button type="button" role="menuitem">Settings</button>
            <button type="button" role="menuitem">Logout</button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Topbar;
