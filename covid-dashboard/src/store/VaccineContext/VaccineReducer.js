import { SET_VACCINE_STATS } from '../actionTypes';

const DiagramReducer = (state, action) => {
  switch (action.type) {
    case SET_VACCINE_STATS:
      return {
        ...state,
        vaccineStats: action.payload,
      };
    default:
      return state;
  }
};

export default DiagramReducer;
