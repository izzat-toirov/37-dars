import React from 'react';
import UserView from '../../../components/userView/UserView';

const User = async () => {
  const response = await fetch('https://fakestoreapi.com/users');
  const data = await response.json();
  return (
    <div>
      <UserView data={data} />
    </div>
  );
};

export default User;
