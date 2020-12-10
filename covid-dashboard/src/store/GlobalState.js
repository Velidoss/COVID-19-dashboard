import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import { GET_GLOBAL_INFO, SET_COUNTRY_TO_OBSERVE } from './actionTypes';
import GlobalReducer from './GlobalReducer';
import api from '../api/api';
import GlobalContext from './GlobalContext';

const GlobalState = ({ children }) => {
  const [state, dispatch] = useReducer(GlobalReducer, { globalInfo: {}, country: '' });

  const getGlobalState = async () => {
    const data = await api('summary');
    dispatch({
      type: GET_GLOBAL_INFO,
      payload: data,
    });
  };

  const setCountryToObserve = (newCountry) => {
    dispatch({
      type: SET_COUNTRY_TO_OBSERVE,
      payload: newCountry,
    });
  };

  GlobalState.propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]).isRequired,
  };

  return (
    <GlobalContext.Provider value={{
      getGlobalState, setCountryToObserve, state,
    }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
