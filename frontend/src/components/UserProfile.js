import React from 'react';
import { useAuth } from '../firebase-config';

const UserProfileComponent = () => {
  const { currentUser, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Logout Error:', error);
    }
  };

  return (
    <div>
      <p>Welcome, {currentUser.displayName}!</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserProfileComponent;
