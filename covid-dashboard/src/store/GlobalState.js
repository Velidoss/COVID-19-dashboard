import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import { GET_GLOBAL_INFO, SET_COUNTRY_TO_OBSERVE, UNSET_COUNTRY_TO_OBSERVE } from './actionTypes';
import GlobalReducer from './GlobalReducer';
import api from '../api/api';
import GlobalContext from './GlobalContext';

const GlobalState = ({ children }) => {
  const [state, dispatch] = useReducer(GlobalReducer, {
    global: {},
    countries: [],
    selectedCountrySlug: '',
    countryInfo: {},
  });

  const getGlobalState = async () => {
    const data = await api('summary');
    dispatch({
      type: GET_GLOBAL_INFO,
      payload: data,
    });
  };

  const setCountryToObserve = (newCountrySlug) => {
    dispatch({
      type: SET_COUNTRY_TO_OBSERVE,
      payload: newCountrySlug,
    });
  };
  const unsetCountryToObserve = () => {
    dispatch({
      type: UNSET_COUNTRY_TO_OBSERVE,
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
      getGlobalState, setCountryToObserve, unsetCountryToObserve, state,
    }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
