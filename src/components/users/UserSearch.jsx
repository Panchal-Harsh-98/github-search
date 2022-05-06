import { React, useState, useContext } from 'react';
import AlertContext from '../../context/alert/AlertContext';
import GithubContext from '../../context/github/GithubContext';

function UserSearch() {
  const { user, searchUsers, clearUsers } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const [text, setText] = useState('');

  const handleChange = (param) => {
    setText(param.target.value);
  };

  const handleSubmit = (param) => {
    param.preventDefault();
    if (text === '') {
      setAlert('Please Enter Something', 'error');
    } else {
      searchUsers(text);
      // @todo - search
      setText('');
    }
  };
  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-8 mb-8'>
      <div className=''>
        <form action='' onSubmit={handleSubmit}>
          <div className='form-control'>
            <div className='relative'>
              <input
                value={text}
                onChange={handleChange}
                type='text'
                className='w-full pr-40 bg-gray-200 input input-lg text-black'
                placeholder='Search'
              />
              <button
                className='absolute top-0 right-0 rounded-l-none w-36 btn btn-lg'
                type='submit'
              >
                GO
              </button>
            </div>
          </div>
        </form>
      </div>
      {user.length > 0 && (
        <div className=''>
          <button onClick={clearUsers} className='btn btn-ghost btn-lg'>
            clear
          </button>
        </div>
      )}
    </div>
  );
}

export default UserSearch;
