import React from 'react';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import UserResults from '../components/users/UserResults';
import UserSearch from '../components/users/UserSearch';
function Home() {
  return (
    <div className=''>
      <UserSearch />
      <UserResults />
    </div>
  );
}

export default Home;
