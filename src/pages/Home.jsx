import React from 'react';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div className=''>
      <h1>{process.env.REACT_APP_GIT_URL}</h1>
    </div>
  );
}

export default Home;
