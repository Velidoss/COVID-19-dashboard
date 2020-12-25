import { SET_DIAGRAM_STATS } from '../actionTypes';

const DiagramReducer = (state, action) => {
  switch (action.type) {
    case SET_DIAGRAM_STATS:
      return {
        ...state,
        diagramStats: action.payload.country ? action.payload.timeline : action.payload,
      };
    default:
      return state;
  }
};

export default DiagramReducer;
