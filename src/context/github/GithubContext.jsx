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

  const fetchUsers = async () => {
    setLoading();
    const response = await fetch(`${process.env.REACT_APP_GIT_URL}/users`, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GIT_TOKEN}`,
      },
    });
    const data = await response.json();
    dispatch({
      type: 'GET_USER',
      payload: data,
    });
  };

  const setLoading = () => {
    dispatch({ type: 'SET_LOADING' });
  };
  return (
    <GithubContext.Provider
      value={{ user: state.user, loading: state.loading, fetchUsers }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
