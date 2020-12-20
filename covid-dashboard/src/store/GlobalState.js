import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import {
  GET_GLOBAL_INFO,
  GET_COUNTRIES_INFO,
  SET_COUNTRY_REGIONS_INFO,
  SET_COUNTRY_TO_OBSERVE,
  UNSET_COUNTRY_TO_OBSERVE,
  GET_SEARCH_RESULT, SET_CONTENT_TYPE,
} from './actionTypes';
import GlobalReducer from './GlobalReducer';
import api from '../api/api';
import GlobalContext from './GlobalContext';

const GlobalState = ({ children }) => {
  const [state, dispatch] = useReducer(GlobalReducer, {
    global: {},
    contentConfig: {
      timePeriod: 'fullPeriod', // or 'lastDay'
      quantities: 'whole', // or 'per100'
    },
    countries: [],
    selectedCountryId: -1,
    selectedCountryInfo: {},
    countryRegions: [],
    searchResult: [],
  });

  const getGlobalState = async () => {
    const data = await api('https://disease.sh/v3/covid-19/all');
    dispatch({
      type: GET_GLOBAL_INFO,
      payload: data,
    });
  };

  const getPerCountryState = async () => {
    const data = await api('https://disease.sh/v3/covid-19/countries');
    dispatch({
      type: GET_COUNTRIES_INFO,
      payload: data,
    });
  };

  const getCountryRegionsInfo = async (country) => {
    const date = new Date();
    const dateToInsert = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    const data = await api(`https://api.covid19tracking.narrativa.com/api/${dateToInsert}/country/${country}`);
    dispatch({
      type: SET_COUNTRY_REGIONS_INFO,
      payload: data,
    });
  };

  const setCountryToObserve = (newCountryId) => {
    dispatch({
      type: SET_COUNTRY_TO_OBSERVE,
      payload: newCountryId,
    });
  };

  const setContentConfig = (contentType, value) => {
    dispatch({
      type: SET_CONTENT_TYPE,
      contentType,
      value,
    });
  };

  const unsetCountryToObserve = () => {
    dispatch({
      type: UNSET_COUNTRY_TO_OBSERVE,
    });
  };

  const getSearchResult = (query) => {
    dispatch({
      type: GET_SEARCH_RESULT,
      query,
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
      getGlobalState,
      getPerCountryState,
      setCountryToObserve,
      unsetCountryToObserve,
      getCountryRegionsInfo,
      getSearchResult,
      setContentConfig,
      state,
    }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
