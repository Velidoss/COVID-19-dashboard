import React from 'react';
import PropTypes from 'prop-types';
import style from './GlobalLosses.module.scss';
import useSelectedCountry from '../../customHooks/useSelectedCountry';
import contentConstants from '../../constants/contentConstants';

const Country = ({
  country, setCountryToObserve, unsetCountryToObserve, selectedCountryId, contentConfig,
}) => {
  const isSelected = useSelectedCountry(country.countryInfo._id, selectedCountryId);
  const { quantities } = contentConfig;
  const { whole } = contentConstants.quantities;

  return (
    <div
      className={isSelected ? style.losses__list_item_selected : style.losses__list_item}
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
      <span className={style.losses__list_item_name}>{country.country}</span>
      <span className={style.losses__list_item_number}>
        {`${quantities === whole ? country.deaths : country.deathsPerOneMillion} `}
        deaths
      </span>
    </div>
  );
};

Country.propTypes = {
  country: PropTypes.shape({
    deaths: PropTypes.number.isRequired,
    country: PropTypes.string.isRequired,
    deathsPerOneMillion: PropTypes.number.isRequired,
    countryInfo: PropTypes.shape({
      _id: PropTypes.number.isRequired,
    }),
  }).isRequired,
  setCountryToObserve: PropTypes.func.isRequired,
  unsetCountryToObserve: PropTypes.func.isRequired,
  selectedCountryId: PropTypes.number.isRequired,
  contentConfig: PropTypes.shape({
    timePeriod: PropTypes.string.isRequired,
    quantities: PropTypes.string.isRequired,
  }).isRequired,
};

export default Country;
