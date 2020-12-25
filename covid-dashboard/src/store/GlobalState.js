import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import {
  GET_GLOBAL_INFO,
  GET_COUNTRIES_INFO,
  SET_COUNTRY_TO_OBSERVE,
  UNSET_COUNTRY_TO_OBSERVE,
  GET_SEARCH_RESULT, SET_CONTENT_TYPE,
} from './actionTypes';
import GlobalReducer from './GlobalReducer';
import api from '../api/api';
import GlobalContext from './GlobalContext';
import contentConstants from '../constants/contentConstants';
import apiEndpoints from '../constants/apiEndpoints';

const { timePeriod, quantities } = contentConstants;
const { globalInfoEndpoint, countriesInfoEndpoint } = apiEndpoints;

const GlobalState = ({ children }) => {
  const [state, dispatch] = useReducer(GlobalReducer, {
    global: {},
    contentConfig: {
      timePeriod: timePeriod.fullPeriod,
      quantities: quantities.whole,
    },
    countries: [],
    selectedCountryId: -1,
    selectedCountryInfo: {},
    countryRegions: [],
    searchResult: [],
  });

  const getGlobalState = async () => {
    const data = await api(globalInfoEndpoint);
    dispatch({
      type: GET_GLOBAL_INFO,
      payload: data,
    });
  };

  const getPerCountryState = async () => {
    const data = await api(countriesInfoEndpoint);
    dispatch({
      type: GET_COUNTRIES_INFO,
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

  return (
    <GlobalContext.Provider value={{
      getGlobalState,
      getPerCountryState,
      setCountryToObserve,
      unsetCountryToObserve,
      getSearchResult,
      setContentConfig,
      state,
    }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

GlobalState.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default GlobalState;
