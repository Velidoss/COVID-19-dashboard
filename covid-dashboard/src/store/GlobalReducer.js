import { GET_GLOBAL_INFO } from './actionTypes';

const GlobalReducer = (state, action) => {
  switch (action.type) {
    case GET_GLOBAL_INFO:
      return {
        ...state, globalInfo: action.payload,
      };
    default:
      return state;
  }
};

export default GlobalReducer;
