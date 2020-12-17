import React from 'react';
import PropTypes from 'prop-types';
import style from './PerCountryCases.module.scss';
import useSelectedCountry from '../../customHooks/useSelectedCountry';

// eslint-disable-next-line no-unused-vars
const Country = ({
  country, setCountryToObserve, unsetCountryToObserve, selectedCountryId,
}) => {
  const isSelected = useSelectedCountry(country.countryInfo._id, selectedCountryId);

  return (
    // eslint-disable-next-line max-len
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div
      className={isSelected ? style.cases__list_item_selected : style.cases__list_item}
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
      <span className={style.cases__list_item_injured}>{country.cases}</span>
      <span className={style.cases__list_item_country}>{country.country}</span>
    </div>
  );
};

Country.propTypes = {
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
};

export default Country;
