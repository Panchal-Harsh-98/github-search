import React from 'react';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import UserResults from '../components/users/UserResults';
function Home() {
  return (
    <div className=''>
      <UserResults />
    </div>
  );
}

export default Home;
