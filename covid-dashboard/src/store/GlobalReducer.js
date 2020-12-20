import {
  GET_GLOBAL_INFO,
  GET_COUNTRIES_INFO,
  SET_COUNTRY_TO_OBSERVE,
  UNSET_COUNTRY_TO_OBSERVE,
  SET_COUNTRY_REGIONS_INFO,
  GET_SEARCH_RESULT,
} from './actionTypes';

const GlobalReducer = (state, action) => {
  switch (action.type) {
    case GET_GLOBAL_INFO:
      return {
        ...state,
        global: action.payload,
      };
    case GET_COUNTRIES_INFO:
      return {
        ...state,
        countries: action.payload.filter((country) => country.countryInfo._id !== null),
        selectedCountryInfo: state.selectedCountryId !== -1
          ? action.payload
            .filter((country) => country.countryInfo._id === state.selectedCountryId)
          : state.global,
      };
    case SET_COUNTRY_TO_OBSERVE:
      return {
        ...state,
        selectedCountryId: action.payload,
        selectedCountryInfo: action.payload
          ? state.countries
            .filter((country) => country.countryInfo._id === action.payload)[0] : global,
      };
    case UNSET_COUNTRY_TO_OBSERVE:
      return {
        ...state,
        selectedCountryId: -1,
        selectedCountryInfo: state.global,
      };
    case GET_SEARCH_RESULT:
      return {
        ...state,
        searchResult: state.countries
          .filter((country) => country.country.toLowerCase().includes(action.query.toLowerCase())),
      };
    case SET_COUNTRY_REGIONS_INFO:
      return {
        ...state,
        countryRegions: action.payload,
      };
    default:
      return state;
  }
};

export default GlobalReducer;
