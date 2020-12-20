import React from 'react';
import PropTypes from 'prop-types';
import style from './Search.module.scss';
import useSelectedCountry from '../../../customHooks/useSelectedCountry';

// eslint-disable-next-line no-unused-vars
const SearchCountry = ({
  country, setCountryToObserve, unsetCountryToObserve, selectedCountryId, flagImg,
}) => {
  const isSelected = useSelectedCountry(country.countryInfo._id, selectedCountryId);

  return (
    // eslint-disable-next-line max-len
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div
      className={isSelected ? style.search__results_item_selected : style.search__results_item}
      id={country.countryInfo._id}
      selected={isSelected}
      onClick={() => {
        if (isSelected) {
          unsetCountryToObserve();
        } else {
          setCountryToObserve(country.countryInfo._id);
        }
      }}
    >
      <span className={style.search__results_item_text}>{country.country}</span>
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <img className={style.search__results_item_img} src={flagImg} alt="flag" />
    </div>
  );
};

SearchCountry.propTypes = {
  country: PropTypes.shape({
    cases: PropTypes.number.isRequired,
    country: PropTypes.string.isRequired,
    countryInfo: PropTypes.shape({
      _id: PropTypes.number.isRequired,
    }),
  }).isRequired,
  setCountryToObserve: PropTypes.func.isRequired,
  unsetCountryToObserve: PropTypes.func.isRequired,
  selectedCountryId: PropTypes.number.isRequired,
  flagImg: PropTypes.string.isRequired,
};

export default SearchCountry;
