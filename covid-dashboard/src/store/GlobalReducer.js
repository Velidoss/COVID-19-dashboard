import { GET_GLOBAL_INFO, SET_COUNTRY_TO_OBSERVE } from './actionTypes';

const GlobalReducer = (state, action) => {
  switch (action.type) {
    case GET_GLOBAL_INFO:
      return {
        ...state, globalInfo: action.payload,
      };
    case SET_COUNTRY_TO_OBSERVE:
      return {
        ...state, country: action.payload,
      };
    default:
      return state;
  }
};

export default GlobalReducer;
