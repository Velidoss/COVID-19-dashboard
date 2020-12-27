import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import VaccineReducer from './VaccineReducer';
import api from '../../api/api';
import apiEndpoints from '../../constants/apiEndpoints';
import { SET_VACCINE_STATS } from '../actionTypes';
import VaccineContext from './VaccineContext';

const { vaccineStatsEndPoint } = apiEndpoints;

const VaccineState = ({ children }) => {
  const [state, dispatch] = useReducer(VaccineReducer, {
    vaccineStats: {},
  });

  const getVaccineStatistics = async () => {
    const data = await api(vaccineStatsEndPoint);
    dispatch({
      type: SET_VACCINE_STATS,
      payload: data,
    });
  };

  return (
    <VaccineContext.Provider
      value={{
        state,
        getVaccineStatistics,
      }}
    >
      {children}
    </VaccineContext.Provider>
  );
};

VaccineState.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default VaccineState;
