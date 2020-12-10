import React, { useReducer } from 'react';
import { GET_GLOBAL_INFO } from './actionTypes';
import GlobalReducer from './GlobalReducer';
import api from '../api/api';
import GlobalContext from './GlobalContext';

// eslint-disable-next-line react/prop-types
const GlobalState = ({ children }) => {
  const [state, dispatch] = useReducer(GlobalReducer, { globalInfo: {} });

  const getGlobalState = async () => {
    const data = api('summary');
    dispatch({
      type: GET_GLOBAL_INFO,
      globalInfo: data,
    });
  };

  return (
    <GlobalContext.Provider value={{ getGlobalState, state }}>{children}</GlobalContext.Provider>
  );
};

export default GlobalState;
