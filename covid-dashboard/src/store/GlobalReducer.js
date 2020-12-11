import { GET_GLOBAL_INFO, SET_COUNTRY_TO_OBSERVE, UNSET_COUNTRY_TO_OBSERVE } from './actionTypes';

const GlobalReducer = (state, action) => {
  switch (action.type) {
    case GET_GLOBAL_INFO:
      return {
        ...state,
        global: action.payload.Global,
        countries: action.payload.Countries,
        countryInfo: state.selectedCountrySlug
          ? action.payload.Countries
            .filter((country) => country.Slug === state.selectedCountrySlug)
          : action.payload.Global,
      };
    case SET_COUNTRY_TO_OBSERVE:
      return {
        ...state,
        selectedCountrySlug: action.payload,
        countryInfo: action.payload
          ? state.countries.filter((country) => country.Slug === action.payload)[0] : global,
      };
    case UNSET_COUNTRY_TO_OBSERVE:
      return {
        ...state,
        selectedCountrySlug: '',
        countryInfo: state.global,
      };
    default:
      return state;
  }
};

export default GlobalReducer;
