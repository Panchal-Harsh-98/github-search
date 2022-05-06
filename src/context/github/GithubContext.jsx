import { createContext, useState, useReducer } from 'react';
import githubReducer from './GithubReducer';

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GIT_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GIT_TOKEN;

export const GithubProvider = ({ children }) => {
  const initState = {
    user: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initState);

  /**
   * this method when invoked calls the search user api with the suggested text
   *
   * @param {*} text pass the name of the user to be searched
   */
  const searchUsers = async (text) => {
    setLoading();

    const params = new URLSearchParams({
      q: text,
    });
    const response = await fetch(
      `${process.env.REACT_APP_GIT_URL}/search/users?${params}`,
      {
        headers: {
          Authorization: `token ${process.env.REACT_APP_GIT_TOKEN}`,
        },
      }
    );
    const data = await response.json();
    console.log('search user response', data);
    dispatch({
      type: 'GET_USER',
      payload: data.items,
    });
  };

  // SETS THE LOADING ANIMATION TO BE VISIBLE
  const setLoading = () => {
    dispatch({ type: 'SET_LOADING' });
  };

  // CLEAR THE USERS THAT ARE SEARCHED AND VISIBLE ON THE PAGE
  const clearUsers = () => {
    dispatch({ type: 'CLEAR_USERS' });
  };

  return (
    <GithubContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        searchUsers,
        clearUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
