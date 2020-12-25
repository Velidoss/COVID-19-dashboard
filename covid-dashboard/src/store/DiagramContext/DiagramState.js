import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import DiagramReducer from './DiagramReducer';
import api from '../../api/api';
import apiEndpoints from '../../constants/apiEndpoints';
import { SET_DIAGRAM_STATS } from '../actionTypes';
import DiagramContext from './DiagramContext';

const { historicalDataEndPoint } = apiEndpoints;

const DiagramState = ({ children }) => {
  const [state, dispatch] = useReducer(DiagramReducer, {
    diagramStats: {},
  });

  const getDiagramStatistics = async (country = '', period = 30) => {
    const data = await api(`${historicalDataEndPoint}${country.length > 0 ? `/${country}` : '/all'}?lastdays=${period}`);
    dispatch({
      type: SET_DIAGRAM_STATS,
      payload: data,
    });
  };

  return (
    <DiagramContext.Provider
      value={{
        state,
        getDiagramStatistics,
      }}
    >
      {children}
    </DiagramContext.Provider>
  );
};

DiagramState.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default DiagramState;
